type Props = {children: React.ReactNode}

const App = ({children}: Props) => {
  return (
    <>
      <div className="
        tracking-tight
        w-screen
        h-svh
        flex
        justify-center
        items-center
      ">
        <div className="
          md:bg-overlay-1
          w-full
          h-full
          bg-overlay-0
          bg-cover
          saturate-[67%]
          brightness-75
          absolute
          -z-10
        "></div>
        <div className="
          app
          md:bg-overlay-1
          w-[calc(100svw_-_1rem)]
          h-[calc(100svh_-_1rem)]
          bg-overlay-0
          bg-cover
          rounded-[12px]
          shadow-custom-inner-1
          flex
          justify-center
          items-center
          overflow-scroll
        ">
          {children}
        </div>
      </div>
    </>
  );
}

export default App;