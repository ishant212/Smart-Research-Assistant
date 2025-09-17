document.addEventListener('DOMContentLoaded', () => {
    // Load saved notes
    chrome.storage.local.get(['researchNotes'], function(result) {
        if (result.researchNotes) {
            document.getElementById('notes').value = result.researchNotes;
        }
    });

    // 🔹 Text operation
    document.getElementById('summarizeTextBtn').addEventListener('click', () => handleOperation('summarize'));

    // 🔹 Code operations
    document.getElementById('summarizeCodeBtn').addEventListener('click', () => handleOperation('summarize code'));
    document.getElementById('suggestCodeBtn').addEventListener('click', () => handleOperation('suggest code'));
    document.getElementById('fixBtn').addEventListener('click', () => handleOperation('fix'));
    document.getElementById('explainBtn').addEventListener('click', () => handleOperation('explain'));
    document.getElementById('testcasesBtn').addEventListener('click', () => handleOperation('testcases'));
    document.getElementById('optimizeBtn').addEventListener('click', () => handleOperation('optimize'));

    // Save notes
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotes);
});

async function handleOperation(operation) {
    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        const [{ result }] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => window.getSelection().toString()
        });

        if (!result) {
            showResult("⚠️ Please select some text or code first!");
            return;
        }

        const response = await fetch("http://localhost:8080/api/research/process", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: result, operation })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const text = await response.text();
        showResult(text.replace(/\n/g, '<br>'));
    } catch (error) {
        showResult('❌ Error: ' + error.message);
    }
}

async function saveNotes() {
    const notes = document.getElementById('notes').value;
    chrome.storage.local.set({ 'researchNotes': notes }, function() {
        alert('✅ Notes saved successfully');
    });
}

function showResult(content) {
    document.getElementById('results').innerHTML =
        `<div class="result-item"><div class="result-content">${content}</div></div>`;
}
