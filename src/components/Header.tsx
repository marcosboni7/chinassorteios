import useSWR from 'swr';

const Header = () => {
  const { data } = useSWR('/api/authorize', async (url) => await (await fetch(url)).json(), {
    revalidateOnFocus: false
  });
  const user = data?.user ?? null;

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex items-center h-24">
        <div className="flex items-center justify-center">
          {/* <img className="h-16" src="" alt="china" /> */}
          <span className="ml-4 uppercase font-black">China<br />Sorteio</span>
        </div>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8 active">
              <a href="/">Home</a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="/pedidos">Meus pedidos</a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="">Termos</a>
            </li>
          </ul>
        </nav>
        {
          !user ?
          <a href='/login' className="border border-white rounded-full font-bold px-8 py-2">LOGIN</a> :
          <div className="h-10 w-10 bg-white rounded-full" />
        }
        
      </div>
    </header>
  );
};

export default Header;