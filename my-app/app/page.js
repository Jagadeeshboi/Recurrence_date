import Head from 'next/head';
import DatePicker from '../components/Datepicker';
import ContextProvider from '../components/Context';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recurring Date Picker</title>
        <meta name="description" content="Date Picker with recurring options" />
      </Head>

      <main suppressHydrationWarning>
        <h1 className="text-center w-full text-blue-500 my-2">
          Recurring Date Picker Component
        </h1>
        <div className="flex justify-center my-10 mx-auto shadow-md w-[760px] redius-md">
          <ContextProvider>
            <DatePicker />
          </ContextProvider>
        </div>
      </main>
    </div>
  );
}
