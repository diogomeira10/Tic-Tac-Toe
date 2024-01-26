//Cria aqui o teu componente
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";



function Tabuleiro({ jogo, adicionarJogada, verificar }) {
    return (
      <div className="tabuleiro">
        {jogo.tabuleiro.map((linha, linhaIndex) => (
          <div className="linha" key={linhaIndex}>
            {linha.map((_, colunaIndex) => (
              <Square
                key={colunaIndex}
                jogo={jogo}
                linha={linhaIndex}
                coluna={colunaIndex}
                adicionarJogada={adicionarJogada}
                verificar={verificar}  
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
  

  function Square({ jogo, linha, coluna, adicionarJogada, verificar, fimDoJogo }) {
    const handleClick = () => {
      if (!fimDoJogo && jogo.tabuleiro[linha][coluna] === " " && !verificar(jogo)) {
        adicionarJogada(jogo, jogo.jogadorAtual, linha, coluna);
      }
    };
  
    const textStyle = {
      fontSize: "20px", // Set the desired font size for X and O
    };
  
    return (
      <button onClick={handleClick} className="square">
        <span style={textStyle}>{jogo.tabuleiro[linha][coluna]}</span>
      </button>
    );
  }
  




export function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor,
        reiniciarJogo,
    } = useJogoDoGalo();

    const vencedor = verificarVencedor(jogo);
    const fimDoJogo = verificarFimDoJogo(jogo);
    
    return (
        <div>
            
            <Tabuleiro verificar={verificarFimDoJogo} jogo={jogo} adicionarJogada={adicionarJogada} />
            {fimDoJogo && (
                <div>
                    {vencedor ? `Vencedor: ${vencedor}` : "Empate"}
                    
                </div>
            )}
            <button className="botao_reiniciar" onClick={reiniciarJogo}>Reiniciar Jogo</button>
        </div>
    );
}