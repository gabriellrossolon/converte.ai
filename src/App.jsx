import { useState } from "react";
import OptionField from "./components/OptionField";

function App() {
  const [coinOrigin, setCoinOrigin] = useState("");
  const [coinDestiny, setCoinDestiny] = useState("");
  const [coinAmount, setCoinAmount] = useState("");
  const [coinResult, setCoinResult] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!coinOrigin || !coinDestiny || !coinAmount) {
      setError("Verifique se todos os campos foram preenchidos!");
      return;
    }

    if (coinOrigin === coinDestiny) {
      setCoinResult(parseFloat(coinAmount).toFixed(2));
      return;
    }

    setError("");

    const url = `https://api.frankfurter.app/latest?amount=${coinAmount}&from=${coinOrigin}&to=${coinDestiny}`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const valorConvertido = data.rates[coinDestiny].toFixed(2);
        setCoinResult(valorConvertido);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-semibold mb-6 mt-8">Converte.Ai</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-start justify-center gap-4 bg-gray-500/10 p-8 rounded-xl shadow-xl shadow-black/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <OptionField value={coinOrigin} setValue={setCoinOrigin} />
            <OptionField value={coinDestiny} setValue={setCoinDestiny} />
          </div>
          <div className="w-full">
            <label className="flex flex-col items-start">
              <span>Valor a converter:</span>
              <input
                value={coinAmount}
                onChange={(e) => setCoinAmount(e.target.value)}
                type="number"
                placeholder="Insira o valor"
                required
                className="border border-white/50 rounded px-2 py-1 w-full"
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-gray-500/20  p-2 rounded-2xl w-full font-semibold text-xl mt-6 cursor-pointer hover:bg-gray-500/30 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Convertendo..." : "Converter"}
          </button>
        </form>
        <div className="bg-gray-500/10 py-8 px-16 rounded-full mt-6 shadow-xl shadow-black/20 mx-2 text-center">
          {coinResult ? (
            <div className="flex flex-col items-center">
              <p>
                <p>Resultado:</p>
                <strong>
                  {coinResult} {coinDestiny}
                </strong>
              </p>
            </div>
          ) : loading ? (
            <div>
              <p>Carregando...</p>
            </div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <p>Preencha os campos</p>
          )}
        </div>
        <div className="mt-auto bg-gray-800 w-full text-center text-white/80 p-1">
          <p>
            Desenvolvido por Gabriell Rossolon -{" "}
            <a
              className="underline text-blue-500"
              href="https://portfolio-2025-cyan-eight.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfólio
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
