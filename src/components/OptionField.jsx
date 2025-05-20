const OptionField = ({ value, setValue }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <h3>Converter de:</h3>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="border border-white/50 rounded px-2 py-1"
      >
        <option value="" className="text-black bg-gray-200" disabled hidden>
          Selecione a moeda
        </option>
        <option value="USD" className="text-black bg-gray-200">
          Dólar Americano (USD)
        </option>
        <option value="EUR" className="text-black bg-gray-200">
          Euro (EUR)
        </option>
        <option value="JPY" className="text-black bg-gray-200">
          Iene (JPY)
        </option>
        <option value="GBP" className="text-black bg-gray-200">
          Libra Esterlina (GBP)
        </option>
        <option value="AUD" className="text-black bg-gray-200">
          Dólar Australiano (AUD)
        </option>
        <option value="CAD" className="text-black bg-gray-200">
          Dólar Canadense (CAD)
        </option>
        <option value="CHF" className="text-black bg-gray-200">
          Franco Suíço (CHF)
        </option>
        <option value="CNY" className="text-black bg-gray-200">
          Yuan Renminbi (CNY)
        </option>
        <option value="BRL" className="text-black bg-gray-200">
          Real (BRL)
        </option>
        <option value="INR" className="text-black bg-gray-200">
          Rúpia Indiana (INR)
        </option>
      </select>
    </div>
  );
};

export default OptionField;
