import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Home, MessageCircle, Share2, ShoppingCart, X, ChevronDown, Truck, RotateCcw, Gift, MapPin, Package } from "lucide-react";
import productImage from "@/assets/product-main.png";
import jblLogo from "@/assets/jbl-logo.jpg";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
const Index = () => {
  const [timeLeft, setTimeLeft] = useState(59 * 60 + 40); // 59 minutos e 40 segundos
  const [voltageSelected, setVoltageSelected] = useState(false);
  const [storeDialogOpen, setStoreDialogOpen] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleAddToCart = () => {
    toast({
      title: "Produto Adicionado ao carrinho!",
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    window.open('https://pagamento.eletronicpay.shop/checkout?product=c8fbf0e5-ca44-11f0-a40c-46da4690ad53', '_blank');
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  const reviews = [{
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Pra finalidade que vou usar,que é plugar um violão ou viola na entrada p 10 de mic ,ficou espetacular pra fazer rodas de viola onde tem muita gente conversando perto e cobrindo o som do instrumento, plugado para voz e violão também ficou um som muito limpo, única coisa achei que daria mais que 120db com 100 watts rms,sendo que minha jbl flip 6 que tem apenas 30 wats alcança incríveis 99 db.",
    images: ["https://jbloficialbr.lovable.app/assets/review-jbl-1-49B0eYAa.webp", "https://jbloficialbr.lovable.app/assets/review-jbl-2-BUSZ0QNT.webp"],
    avatar: "https://jbloficialbr.lovable.app/assets/review-profile-carlos-7iuLmgL6.jpg"
  }, {
    name: "Rafaela Lima",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Tem proporcionado momentos muitos divertidos com os amigos! única coisa que não me agradou é que os microfones não conectam com outros dispositivos... apenas nessa caixa. Então se algo acontecer com a caixa perco 2 microfones ótimos! a caixa é super linda e com som ótimo porém a bateria deixa a desejar mas se ligar na tomada fica perfeita.",
    images: ["https://jbloficialbr.lovable.app/assets/review-jbl-3-DtOtI_z4.webp", "https://jbloficialbr.lovable.app/assets/review-jbl-4-CjHBwwRH.webp", "https://jbloficialbr.lovable.app/assets/review-jbl-5-Bt3bh9Vd.webp", "https://jbloficialbr.lovable.app/assets/review-jbl-6-DV-J_ELQ.webp"],
    avatar: "https://jbloficialbr.lovable.app/assets/review-profile-2-CPHO2E74.jpg"
  }, {
    name: "Pedro Raul",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Caramba que perfeição da jbl som fantástico grave muito forte melhor compra da jbl ja fiz recomendo a todos.",
    images: ["/product-2.jpg", "/product-3.jpg"],
    avatar: "https://jbloficialbr.lovable.app/assets/review-profile-3-DIYsgiJG.jpg"
  }, {
    name: "Pietro Santos",
    location: "Curitiba, PR",
    rating: 5,
    text: "Produto com ótima qualidade, grave muito bom e bateria muito duradoura.",
    images: ["/product-4.jpg", "/product-0.jpg"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3 flex items-center justify-between">
        <button className="p-2">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-3">
          <button className="p-2">
            <Share2 className="w-6 h-6" />
          </button>
          <button onClick={handleAddToCart} className="p-2">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="p-2">
            <span className="text-2xl">⋮</span>
          </button>
        </div>
      </header>

      {/* Product Images Carousel */}
      <div className="bg-background px-4 py-2">
        <Carousel className="w-full max-w-[260px] mx-auto">
          <CarouselContent>
            <CarouselItem>
              <img alt="JBL PartyBox Encore Essential - Vista frontal" className="w-full object-contain" src="/product-0.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img alt="JBL PartyBox Encore Essential - Dimensões" className="w-full object-contain" src="/product-1.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img alt="JBL PartyBox Encore Essential - À prova de respingos" className="w-full object-contain" src="/product-2.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img alt="JBL PartyBox Encore Essential - Até 12 horas de reprodução" className="w-full object-contain" src="/product-3.jpg" />
            </CarouselItem>
            <CarouselItem>
              <img alt="JBL PartyBox Encore Essential - Som Original Pro" className="w-full object-contain" src="/product-4.jpg" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Price Section */}
      <div className="bg-accent px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-accent-foreground text-2xl">R$ 37,90</span>
              <Gift className="text-accent-foreground w-[15px] h-[15px]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-foreground/80 line-through text-xs">R$ 1.389,90</span>
              <span className="font-semibold text-accent-foreground text-xs">Economize 88%</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold text-accent-foreground mb-1"> OFERTA RELÂMPAGO</div>
            <div className="bg-background text-sm font-bold py-0 px-[8px] text-orange-600 rounded shadow-none">
              TERMINA EM {formatTime(timeLeft)}
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-6 space-y-4">
        <Badge className="text-badge-promo-foreground rounded-full px-3 py-1 text-xs font-medium bg-fuchsia-300 border-none border-0 shadow-sm text-black">Black Friday</Badge>
        
        <h1 className="text-xl font-semibold">
          Caixa De Som Bluetooth Partybox Encore Essential 100w Jbl Cor Preto
        </h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.7</span>
          </div>
          <span className="text-muted-foreground">({reviews.length + 487})</span>
          <span className="text-muted-foreground">• 4473 vendidos</span>
        </div>

        {/* Voltage */}
        <div>
          <h3 className="font-semibold mb-2">Voltagem</h3>
          <Button variant="outline" className={`rounded-full ${voltageSelected ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' : ''}`} onClick={() => setVoltageSelected(!voltageSelected)}>
            127/220V
          </Button>
        </div>

        {/* Benefits */}
        <Card className="p-4 space-y-4">
          <div className="flex gap-3">
            <div className="text-success mt-1">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-success">Frete grátis</h4>
              <p className="text-sm text-muted-foreground">Entrega expressa em todo Brasil. Receba seu produto em até 15 dias úteis com código de rastreamento completo.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-foreground mt-1">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold">Devolução grátis até 30 dias</h4>
              <p className="text-sm text-muted-foreground">Não gostou? Devolvemos seu dinheiro sem burocracia. Frete de retorno gratuito e reembolso rápido garantido.</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Reviews Section */}
      <div ref={reviewsRef} className="px-4 py-6 border-t border-border">
        <h2 className="text-xl font-bold mb-4">Avaliações dos clientes ({reviews.length + 487})</h2>
        
        <div className="space-y-6">
          {reviews.map((review, index) => <div key={index} className="space-y-2">
              <div className="flex items-center gap-3">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-muted" />
                )}
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.location}</p>
              <p className="text-sm">{review.text}</p>
              {review.images.length > 0 && <div className="flex gap-2 overflow-x-auto">
                  {review.images.map((img, imgIndex) => <img key={imgIndex} src={img} alt={`Avaliação ${index + 1} - Foto ${imgIndex + 1}`} className="w-20 h-20 rounded object-cover flex-shrink-0" />)}
                </div>}
            </div>)}
        </div>
      </div>

      {/* Store Reviews */}
      <div className="px-4 py-6 border-t border-border">
        <h2 className="text-xl font-bold mb-4">Avaliações da loja (207)</h2>
        
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <Button variant="outline" className="rounded-full whitespace-nowrap">
            <span className="mr-2">📷</span>
            Imagens (52)
          </Button>
          <Button variant="outline" className="rounded-full whitespace-nowrap">
            5 ⭐ (155)
          </Button>
          <Button variant="outline" className="rounded-full whitespace-nowrap">
            4 ⭐ (22)
          </Button>
        </div>

        <div 
          onClick={() => setStoreDialogOpen(true)}
          className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img src={jblLogo} alt="JBL" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold">JBL</h3>
            <p className="text-sm text-muted-foreground">207 produtos</p>
          </div>
          <Button variant="outline" onClick={(e) => e.stopPropagation()}>Seguir</Button>
        </div>
      </div>

      {/* Product Description */}
      <div className="px-4 py-6 border-t border-border">
        <h2 className="text-xl font-bold mb-4">Descrição do produto</h2>
        
        <div className="space-y-4 text-sm">
          <p className="font-semibold">O JBL PartyBox Encore Essential é para todas as festas!</p>
          
          <div>
            <h3 className="font-bold mb-2">EXPERIÊNCIA IMERSIVA</h3>
            <p>Aproveite o som incrível JBL Original Pro com graves profundos, garantindo uma experiência sonora imersiva e envolvente em qualquer lugar.</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">ESPETÁCULO DE LUZES</h3>
            <p>Transforme qualquer ambiente em uma pista de dança com o show de luzes dinâmico, que acompanha o ritmo da sua música, adicionando mais cores na festa.</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">ATÉ 6 HORAS DE BATERIA</h3>
            <p>Com até 6 horas de tempo de reprodução, o JBL PartyBox Encore Essential permite que você mantenha a festa em movimento, sem se preocupar com tomadas ou cabos.</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">À PROVA DE ÁGUA</h3>
            <p>Dance sem preocupações na praia ou à beira da piscina, pois o PartyBox Encore Essential é à prova de água IPX4, garantindo durabilidade mesmo em ambientes úmidos.</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">QUAL O CONTEÚDO DA CAIXA?</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1 JBL PartyBox Encore Essential</li>
              <li>1 Cabo de energia AC (o plugue AC e a quantidade variam conforme a região)</li>
              <li>1 Guia de início rápido</li>
              <li>1 Ficha de segurança</li>
            </ul>
          </div>

          <p className="pt-4">
            <span className="font-bold">A JBL</span> destaca-se com áudio de alta qualidade, tecnologia avançada e design moderno, proporcionando momentos únicos na vida das pessoas.
          </p>

          <div className="pt-4">
            <h3 className="font-bold mb-2">Aviso Legal</h3>
            <p className="text-muted-foreground">• A duração da bateria depende do uso que se dê ao produto.</p>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="px-4 py-6 border-t border-border space-y-3">
        {["Comece a comprar", "Ganhe dinheiro conosco", "Informações da empresa", "Suporte ao cliente"].map(section => <button key={section} className="w-full flex items-center justify-between py-3 border-b border-border">
            <span className="font-semibold">{section}</span>
            <ChevronDown className="w-5 h-5" />
          </button>)}
      </div>

      {/* Store Details Dialog */}
      <Dialog open={storeDialogOpen} onOpenChange={setStoreDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Detalhes da Loja</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <img src={jblLogo} alt="JBL" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">JBL</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4,8</span>
                  <span className="text-muted-foreground text-sm">(15.247 avaliações)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-semibold">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Package className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-semibold">Produtos</h4>
                  <p className="text-muted-foreground">207 produtos disponíveis</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Star className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="font-semibold">Qualidade</h4>
                  <p className="text-muted-foreground">98% de atitudes positivas</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Sobre a loja</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Loja oficial JBL com produtos originais e garantia do fabricante. Frete grátis e devolução em até 30 dias. Atendimento especializado para melhor experiência de compra.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-3 flex items-center justify-around">
        <button onClick={() => setStoreDialogOpen(true)} className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Loja</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Chat</span>
        </button>
        <button onClick={scrollToReviews} className="flex flex-col items-center gap-1">
          <span className="text-xs">Avaliações do</span>
          <span className="text-xs">produto</span>
        </button>
        <Button onClick={handleBuyNow} className="bg-primary text-primary-foreground px-8 py-6 font-bold text-sm">
          COMPRAR AGORA
        </Button>
      </div>
      
      <Toaster />
    </div>;
};
export default Index;