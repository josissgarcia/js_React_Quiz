import { useState } from "react"

const Quiz = () => {

    const [respostas, setRespostas]= useState([])
    const [respostasCertas, setRespostasCertas]= useState([])
    const [respostasErradas, setRespostasErradas]= useState([])
    const [botaoQ1, setBotaoQ1] = useState(true);
    const [botaoQ2, setBotaoQ2] = useState(true);
    const [botaoQ3, setBotaoQ3] = useState(true);
    const [botaoQ4, setBotaoQ4] = useState(true);
  
    function visibilidadeBotao(questao) {
        switch(questao){
            case "Q1": 
                setBotaoQ1(false);
                break;
            case "Q2": 
                setBotaoQ2(false);
                break;
            case "Q3": 
                setBotaoQ3(false);
                break;
            case "Q4": 
                setBotaoQ4(false);
                break;   
        }
    }

    function inicializar(){
        setRespostas([])
        setRespostasCertas([])
        setRespostasErradas([])
        setBotaoQ1(true)
        setBotaoQ2(true)
        setBotaoQ3(true)
        setBotaoQ4(true)
    }
    
    function armazenarRespostas(questao, Opcao, valor){
        if (!respostasCertas.includes(questao) && !respostasErradas.includes(questao)){
            if (valor == true){
                setRespostasCertas([...respostasCertas,questao]); 
            }
            else{
               setRespostasErradas([...respostasErradas,questao])
            }  
            setRespostas([...respostas, 'Questão '+ questao + '- Alternativa:' + Opcao])
            visibilidadeBotao(questao)
        }
        else{
            alert('Essa questão já foi respondida!')
        }
    }

    function resultado(){
        if ((respostasCertas.length + respostasErradas.length) < 4){
            alert('Não é possivel finalizar, pois existem questões não respondidas')
        }else{
            alert('Sua nota final foi: '+ respostasCertas.length + '/' + '4')
            inicializar()
        }
    }

    return (
        <div className="questionario">
            <h2>Olá, responda o Quiz abaixo. As questões só tem uma alternativa correta.</h2>

            <div>
                <h2>1. São características da linguagem JavaScript?</h2>
                <p>a) Linguagem fortemente tipada, orientada a objetos e suporta programação multithreaded. <button name="Q1" onClick={() => armazenarRespostas('Q1', 'A', false)} hidden ={!botaoQ1} >Clique</button></p>
                <p>b) Possuem bibliotecas extensas como Numpy, Pandas e Django. <button name="Q1" onClick={() => armazenarRespostas('Q1', 'B', false)} hidden ={!botaoQ1}>Clique</button></p>
                <p>c) Foi feita com base na linguagem ABC, possui parte da sintaxe derivada do C. <button name="Q1" onClick={() => armazenarRespostas('Q1', 'C', false)} hidden ={!botaoQ1}>Clique</button></p>
                <p>d) Linguagem de alto nível que integram págians web, utiliza o conceito de prototipagem permitindo criar e estender objetos facilmente. <button name="Q1" onClick={() => armazenarRespostas('Q1', 'D', true)} hidden ={!botaoQ1}>Clique</button></p>
            </div>

            <div>
                <h2>2) Para que serve o css e o html  em uma página web, respectivamente?</h2>
                <p>a) Dar segurança ao código. | Realizar tratamento de exceções. <button name="button_2" onClick ={()=> armazenarRespostas("Q2","A",false)} hidden ={!botaoQ2}>Clique</button></p>
                <p>b) Interpretar o código diretamente pelo navegador. | Suportar a programação assíncrona. <button name="button_2" onClick ={()=>armazenarRespostas("Q2","B",false)} hidden ={!botaoQ2}>Clique</button></p>
                <p>c) Estilizar a aparência e o layout. | Criar e estruturar o conteúdo, incluindo textos, imagens, vídeos e outros. <button name="button_2" onClick ={()=>armazenarRespostas("Q2","C" ,true)} hidden ={!botaoQ2}>Clique</button></p>
                <p>d) Facilitar a portabilidade do código, executando em diferentes plataformas. | Gerenciamento de memória automática. <button name="button_2" onClick ={()=>armazenarRespostas("Q2","D" ,false)} hidden ={!botaoQ2}>Clique</button></p>
            </div>

            <div>
                <h2>3) Opção de comando para criar um projeto React?</h2>
                <p>a) npx create-react. <button name="button_3" onClick ={()=>armazenarRespostas("Q3","A",false)} hidden ={!botaoQ3}>Clique</button></p>
                <p>b) npm create vite@latest. <button name="button_3" onClick ={()=>armazenarRespostas("Q3","B", true)} hidden ={!botaoQ3}>Clique</button></p>
                <p>c) npx create vite@lalest. <button name="button_3" onClick ={()=>armazenarRespostas("Q3","C", false)} hidden ={!botaoQ3}>Clique</button></p>
                <p>d) npx create-app. <button name="button_3" onClick ={()=>armazenarRespostas("Q3","D", false)} hidden ={!botaoQ3}>Clique</button></p>
            </div>
 
            <div>
                <h2>4) É boa prática no projeto React criar a pasta de components em qual local ?</h2>
                <p>a) Src. <button name="button_4" onClick ={()=>armazenarRespostas("Q4","A", true)} hidden ={!botaoQ4}>Clique</button></p>
                <p>b) Public. <button name="button_4" onClick ={()=>armazenarRespostas("Q4","B", false)} hidden ={!botaoQ4}>Clique</button></p>
                <p>c) Node_modules. <button name="button_4" onClick ={()=>armazenarRespostas("Q4","C", false)} hidden ={!botaoQ4}>Clique</button></p>
                <p>d) Em qualquer lugar. <button name="button_4" onClick ={()=>armazenarRespostas("Q4","D", false)} hidden ={!botaoQ4}>Clique</button></p>
            </div>
            <div>
                <h3>RESPOSTAS:</h3>
                {respostas.map((item, i) =>(
                    <li key={i}> {item} </li>
                ))}
            </div>
            <button onClick={resultado}>Finalizar Quiz</button>
        </div>
    )
}
export default Quiz