import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* LOGO + DESCRIÇÃO */}
                <div className="space-y-4">
                    <Image
                        src="/logo-1.png"
                        alt="Logo AVB"
                        width={140}
                        height={40}
                    />

                    <p className="text-sm text-neutral-400 leading-relaxed">
                        Aço Verde do Brasil — Inovação, sustentabilidade e tecnologia para o futuro da siderurgia.
                    </p>
                </div>

            
                <div className="space-y-2">
                    <h4 className="text-neutral-100 font-semibold text-lg mb-3">Contato</h4>

                    <p className="text-sm">AVB — Aço Verde do Brasil</p>
                    <p className="text-sm">Rodovia BR-222 </p>
                    <p className="text-sm">Telefone: +55 (99) 3592-1600</p>
                    <p className="text-sm">Email: contato@avb.com</p>
                </div>

            
                <div>
                    <h4 className="text-neutral-100 font-semibold text-lg mb-3">SEDE USINA</h4>

                    <div className="w-full h-40 md:h-48 rounded overflow-hidden border border-neutral-700">
                        <iframe
                            title="SEDE USINA"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.123456789!2d-47.4077379!3d-4.8743677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92cf59b22bbdf707%3A0xc1d6032f85980491!2sA%C3%A7o+Verde+do+Brasil!5e0!3m2!1spt-BR!2sbr!4v1712345678901"
                        ></iframe>

                    </div>
                </div>

            </div>


            <div className="border-t border-neutral-800 py-4 text-center text-neutral-500 text-sm">
                © {new Date().getFullYear()} Aço Verde do Brasil — Todos os direitos reservados.
            </div>
        </footer>
    );
}
