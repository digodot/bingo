// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AizaSyCBpNtUyPAIHdouNsjTuNhgMHtGn9HUSbE",
    authDomain: "bingo-15ba4.firebaseapp.com",
    projectId: "bingo-15ba4",
    storageBucket: "bingo-15ba4.firebasestorage.app",
    messagingSenderId: "792584488773",
    appId: "1:792584488773:web:a0537fd5d607519288a02c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para gerar PDF com marca d'água de autor
window.gerarPDF = function() {
    const elemento = document.getElementById('secao-impressao');
    const opt = {
        margin: 10,
        filename: 'Cartelas_Bingo_Digodot.pdf',
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(elemento).save();
};

// Exemplo de como salvar no Firestore
async function salvarCartela(dados) {
    await addDoc(collection(db, "cartelas"), dados);
}

// Exemplo de leitura em tempo real
onSnapshot(collection(db, "cartelas"), (snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Cartela recebida: ", doc.data());
    });
});