let OperacaoAtual ='';
let resultado = 0;
let operador='';

function AdicionarNumero(numero)
{
    OperacaoAtual += numero;
    AtualizarTela(OperacaoAtual)
}
function AdicionarOperacao(operacao)
{
    if (OperacaoAtual !== '')
    {
        operador = operacao;
        OperacaoAtual += operacao;
        AtualizarTela(OperacaoAtual);
    }
}
function calcular()
{
    try 
    {
        resultado=eval(OperacaoAtual);
        AtualizarTela(OperacaoAtual);
        OperacaoAtual = resultado.toString();
    }
    catch (e)
    {
        AtualizarTela('erro');
        OperacaoAtual='';
    }
}
function limpar()
{
    OperacaoAtual='';
    operador='';
    resultado=0;
    AtualizarTela(0);
}
function AtualizarTela(valor)
{
    document.getElementById('resultado').innerHTML = valor;
}