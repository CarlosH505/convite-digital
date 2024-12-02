import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {
    return (
        <div className="flex flex-col gap-5 grid grid-cols-3">
            {eventos.map((evento) => (
                <div key={evento.id} className=" flex flex-col bg-zinc-800 rounded-lg w-96 w-full overflow-hidden" >

                    <div className="relative w-96 h-52 w-full">

                        <Image src={evento.imagem} fill alt={evento.nome} className="object-cover" />

                    </div>

                    <div className=" flex flex-col flex-1 p-7 gap-5 items-center text-center">

                        <span className="text-lg font-black">{evento.nome}</span>

                        <p className="flex-1 text-sm text-zinc-400 text-center">{evento.descricao}</p>

                        <QRCode value={JSON.stringify({ id: evento.id, senha: evento.senha })} className="w-44 h-44" />

                        <div className="flex gap-5">
                            <Link href={`/evento/admin/${evento.id}/${evento.senha}`} className="botao vermelho flex-1"> Admin
                            </Link>

                            <Link href={`/convite/${evento.alias}`} className="botao verde flex-1">
                                Convite
                            </Link>

                        </div>
                    </div>
                </div>
            ))};
        </div>
    );
};