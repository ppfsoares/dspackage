import {
  Zdialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/zdialog";

import { Zbutton } from "@/components/zbutton";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="font-display scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl">
        H1 A conta inteligente que te ajuda a vender mais veículos
      </h1>
      <h2 className="font-display scroll-m-20 text-3xl first:mt-0">
        H2 A conta inteligente que te ajuda a vender mais veículos
      </h2>
      <h3 className="font-display scroll-m-20 text-2xl border-b">
        H3 A conta inteligente que te ajuda a vender mais veículos
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-4 text-xl">
        P XL Uma plataforma que dispensa todas as outras. Perfeita para vender,
        receber e crescer.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-4 text-lg">
        P LG Uma plataforma que dispensa todas as outras. Perfeita para vender,
        receber e crescer.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-4">
        P 0 Uma plataforma que dispensa todas as outras. Perfeita para vender,
        receber e crescer.
      </p>
      <p className="font-medium leading-none text-sm">
        P sm Uma plataforma que dispensa todas as outras. Perfeita para vender,
        receber e crescer.
      </p>
      <p className="mt-6 border-l-2 pl-6 italic">
        P citação Uma plataforma que dispensa todas as outras. Perfeita para
        vender, receber e crescer.
      </p>
      <p className="text-sm text-muted-foreground">
        P muted Uma plataforma que dispensa todas as outras. Perfeita para
        vender, receber e crescer.
      </p>
      <p className="text-xl text-muted-foreground">
        P lead Uma plataforma que dispensa todas as outras. Perfeita para
        vender, receber e crescer.
      </p>
      <Zdialog>
        <DialogTrigger asChild>
          <Zbutton variant="outline">Cadastre-se</Zbutton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastre-se</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              lalallalala
            </div>
            <div className="grid grid-cols-4 items-center gap-4">lallalala</div>
          </div>
          <DialogFooter>
            <Zbutton variant="secondary">Desistir</Zbutton>
            <Zbutton type="submit">Entrar pro time!</Zbutton>
          </DialogFooter>
        </DialogContent>
      </Zdialog>
    </div>
  );
}

export default App;
