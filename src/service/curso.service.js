import cursoRepository from '../repository/curso.repository.js';

async function createCursoService(novoCurso) {
    const campos = ['nome', 'area', 'nivel', 'modalidade'];
    for (const campo of campos) {
        const valor = novoCurso?.[campo];
        if (typeof valor !== 'string' || !valor.trim()) {
            const error = new Error(`O campo ${campo} é obrigatório!`);
            error.status = 400;
            throw error;
        }
    }

    const curso = await cursoRepository.createCursoRepository(novoCurso);
    if (!curso) {
        throw new Error('Erro na criação do curso!');
    }
    return curso;
}

export default {
    createCursoService,
};
