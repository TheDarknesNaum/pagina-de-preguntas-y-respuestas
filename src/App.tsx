import './App.css'

function App() {

  return (
    <main>
      <div className='flex my-8'>&nbsp;</div>
      <div className='max-w-5xl mx-auto'>
      <h1 className='my-5 text-6xl text-center font-medium max-w-4xl mx-auto'>Frequently Asked Questions</h1>
      <h2 className='my-5 text-2xl text-center font-medium max-w-2x1 mx-auto'>Browse through the most frequently asked questions</h2>
      <br/>
      </div>
      <section className='mx-w-100% bg-gray-50'>
      <br/>
      <div className=' max-w-5xl mx-auto'>
      <ElementCard 
      title="How can I track my order?" 
      subtitle='You can track your order using the following steps'
      resul1="1: Go to the Order Tracking page." 
      resul2='2: Enter your order number and email address.' 
      resul3='3: Click on the Track Order button to view the current status of your shipment.'
      extr='If you encounter any issues, please visit our Help Center.'
      /> 
      <p className=' text-gray-300 text-3xl'>____________________________________________________________________________________</p>
      <ElementCard 
      title="What is your return policy?"
      subtitle=' We offer a 30-day return policy on most items. Here are some key points' 
      resul1=" Items must be in original condition: Unworn, unused, and unwashed." 
      resul2='Include original packaging and tags:All items should be returned with their original packaging and tags.' 
      resul3='Proof of purchase:A receipt or proof of purchase is required.'
      extr='For more detailed information, read our full Return Policy.'
      />
      </div>
      </section>
    </main>
  )
}

interface ElementCardProps {
  title: string
  subtitle: string
  resul1: string
  resul2: string
  resul3: string
  extr: string
}
const ElementCard = ({ title, subtitle, resul1, resul2, resul3, extr }: ElementCardProps) => {//Parametros
  const [text1, ...result1] = resul1.split(":");
  const [text2, ...result2] = resul2.split(":");
  const [text3, ...result3] = resul3.split(":");
  return (//Lo que regresa del elemntcard
    <section className='flex my-6 gap-8'>
      <div className='my-2 text-4xl text-left font-bold max-w-6xl mx-8'>
        <h3 className='flex my-6 gap-3 text-4xl max-w-2xl'>{title}</h3>
        <h3 className='flex my-9 font-medium text-2xl'>{subtitle}</h3>
        <p className='my-4 font-medium text-2xl'><span className='font-bold'>{text1}:</span>{result1.join(":")}</p>
        <p className='my-4 font-medium text-2xl'><span className='font-bold'>{text2}:</span>{result2.join(":")}</p>
        <p className='my-4 font-medium text-2xl'><span className='font-bold'>{text3}:</span>{result3.join(":")}</p>
        <h3 className='flex my-4 gap-2 font-medium text-2xl'>{extr}</h3>
      </div>
    </section>
  )
}

export default App