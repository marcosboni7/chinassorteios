import { ReactElement } from "react";
import useSWR from 'swr';
import SiteLayout from "../../../components/SiteLayout";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const pagarProduto = () => {
  const router = useRouter();
  const { data: payment, error } = useSWR(
    !router.query.id ? null : `/api/payment/${router.query.id}`,
    async (url) => await (await fetch(url)).json(),
    {
      revalidateOnFocus: false
    }
  );

  return (
    <>
      <Head>
        <title>Pedidos</title>
      </Head>
      <div className="overflow-hidden">
        <div
          className=" bg-[url('https://cdn.discordapp.com/attachments/1063180963439464641/1068624011786993814/shinabg.png')]"
          style={{
            height: 303
          }}
        />
        <div className="mt-[201px] ">
          {!payment && !error &&
            <div className="w-6 h-6  rounded-full border-4 border-white border-b-gray-500 animate-spin mx-auto" />
          }
          {payment &&
        
            <Image className="mx-auto " src={`${payment?.qrcode}`} alt="qrcode" width={228} height={228} />}
        </div>
        <div className="bg-slate-600 w-[570px] h-[402px] mt-[-306px] ml-[548px] rounded-3xl "></div>
      </div>
<h1>tete</h1>
<h1>tete</h1>
<h1>tete</h1>

    </>
  );
};

export default pagarProduto;

pagarProduto.getLayout = (page: ReactElement) => {
  return (
    <SiteLayout>
      {page}
    </SiteLayout>
  );
};