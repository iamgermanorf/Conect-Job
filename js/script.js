// Referência para o Firestore
const db = getFirestore(app);

// Seleção do formulário
const vagaForm = document.getElementById('vaga-form');

// Lógica para adicionar nova vaga
vagaForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const local = document.getElementById('local').value;
  
  try {
    // Adicionar vaga ao Firestore
    await addDoc(collection(db, 'vagas'), {
      titulo: titulo,
      descricao: descricao,
      local: local,
      dataCriacao: new Date()
    });
    
    alert('Vaga adicionada com sucesso!');
    // Limpar o formulário
    vagaForm.reset();
  } catch (error) {
    console.error('Erro ao adicionar vaga:', error);
    alert('Erro ao adicionar vaga!');
  }
});
