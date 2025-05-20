import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6 text-gray-900 dark:text-white">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Organize Suas Finanças com a Planilha Inteligente
      </motion.h1>

      <motion.p 
        className="text-lg mb-6 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Cansado de ver seu dinheiro sumir? Assuma o controle agora! Com a Planilha Inteligente de Controle Financeiro, você organiza suas finanças, define metas e transforma sua vida financeira de forma simples, rápida e automática!
      </motion.p>

      <motion.img
        src="https://via.placeholder.com/600x400.png?text=Imagem+da+Planilha"
        alt="Imagem da Planilha"
        className="rounded-2xl shadow-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />

      <button className="text-xl px-8 py-4 mb-10 bg-blue-500 text-white rounded-xl">
        Comprar Agora
      </button>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">Benefícios</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Automatização total com gráficos dinâmicos.</li>
          <li>Fácil de usar, ideal para autônomos.</li>
          <li>Ajuda a definir e alcançar metas financeiras.</li>
        </ul>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">Depoimentos</h2>
        <blockquote className="italic border-l-4 pl-4 border-green-500">
          “Essa planilha mudou minha vida! Agora consigo ver exatamente para onde vai meu dinheiro.” — Ana, empreendedora
        </blockquote>
      </section>

      <section className="max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Como recebo a planilha?</h3>
            <p>Após a compra, você receberá automaticamente o link para fazer uma cópia e usar no seu Google Drive.</p>
          </div>
          <div>
            <h3 className="font-bold">Preciso saber mexer em Excel?</h3>
            <p>Não! A planilha é simples, intuitiva e já vem com todas as fórmulas e gráficos configurados.</p>
          </div>
        </div>
      </section>
    </div>
  );
          }
