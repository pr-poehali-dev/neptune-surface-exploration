import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const attractions = [
  {
    icon: "Mountain",
    title: "Фудзи",
    desc: "Священная гора и символ Японии — незабываемый вид на рассвете",
  },
  {
    icon: "TreePine",
    title: "Киото",
    desc: "Тысячи храмов, гейши, золотой павильон и сады камней",
  },
  {
    icon: "Zap",
    title: "Токио",
    desc: "Мегаполис будущего: неон, аниме, технологии и уличная еда",
  },
  {
    icon: "Waves",
    title: "Окинава",
    desc: "Кристальное море, коралловые рифы и тропические пляжи",
  },
]

const dishes = [
  {
    emoji: "🍣",
    name: "Суши и сашими",
    desc: "Искусство свежей рыбы и риса, которому более 400 лет",
  },
  {
    emoji: "🍜",
    name: "Рамэн",
    desc: "Насыщенный бульон, лапша, яйцо и тонкие ломтики мяса",
  },
  {
    emoji: "🍱",
    name: "Бенто",
    desc: "Сбалансированный обед в изящной коробке — японская традиция",
  },
  {
    emoji: "🥩",
    name: "Вагю",
    desc: "Мраморная говядина с непревзойдённым вкусом и нежностью",
  },
  {
    emoji: "🍡",
    name: "Моти и дайфуку",
    desc: "Рисовые пирожные с начинкой — символ японских праздников",
  },
  {
    emoji: "🍵",
    name: "Матча",
    desc: "Зелёный чай и десерты из него — вкус и спокойствие Японии",
  },
]

export function WaitlistHero() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/4b81f76a-17c5-4209-b616-de4efabfc3c7/files/cd962fbb-9b97-45a2-b701-236150f0ee86.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d0d0d]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-[#c0392b]/20 text-[#e74c3c] border border-[#e74c3c]/40 text-sm px-4 py-1 font-medium">
            🌸 Откройте страну восходящего солнца
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6 text-white drop-shadow-2xl">
            Япония ждёт вас
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Древние храмы и ультрасовременные города, цветение сакуры и океан вкусов —
            страна, которая навсегда изменит ваш взгляд на мир.
          </p>

          {/* Subscription Form */}
          <div className="w-full max-w-md mx-auto">
            {isSubmitted ? (
              <div className="rounded-xl border border-green-500/40 bg-green-900/30 p-5">
                <p className="font-medium text-green-300 text-lg">
                  🎌 Отлично! Мы пришлём вам лучшие маршруты по Японии.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <Icon name="Mail" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                  <Input
                    type="email"
                    placeholder="Ваш email для путеводителя..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm pl-12 text-base text-white placeholder:text-white/40 focus:border-[#e74c3c] focus:ring-0"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 rounded-xl bg-[#c0392b] hover:bg-[#e74c3c] text-white text-base font-semibold transition-all border-0 disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Получить путеводитель бесплатно"}
                </Button>
              </form>
            )}
          </div>

          {/* Social proof */}
          <p className="mt-6 text-sm text-white/50">
            Уже <span className="text-white font-semibold">12 400+</span> путешественников открыли Японию с нами
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white/40" size={28} />
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#e74c3c] text-sm font-medium tracking-widest uppercase mb-3">Достопримечательности</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">
              Почему едут в Японию
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Каждый уголок страны — это отдельная вселенная
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#e74c3c]/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#c0392b]/20 flex items-center justify-center group-hover:bg-[#c0392b]/40 transition-colors">
                  <Icon name={item.icon} fallback="Star" size={22} className="text-[#e74c3c]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Street photo banner */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative h-72 md:h-96">
          <img
            src="https://cdn.poehali.dev/projects/4b81f76a-17c5-4209-b616-de4efabfc3c7/files/ded38c50-7186-4057-8f2b-143baaa465f1.jpg"
            alt="Улицы Киото"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
            <div className="px-10">
              <p className="text-[#e74c3c] text-sm uppercase tracking-widest mb-2">Атмосфера</p>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal max-w-xs leading-tight">
                Магия ночного Киото
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-24 px-6 bg-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#e74c3c] text-sm font-medium tracking-widest uppercase mb-3">Гастрономия</p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">
              Национальные блюда
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Японская кухня — это философия уважения к продукту и мастерству
            </p>
          </div>

          {/* Food image */}
          <div className="rounded-3xl overflow-hidden mb-12 h-64 md:h-80">
            <img
              src="https://cdn.poehali.dev/projects/4b81f76a-17c5-4209-b616-de4efabfc3c7/files/51a17720-e7df-4029-8b6b-a6579ccb34b3.jpg"
              alt="Японские блюда"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#e74c3c]/40 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-4xl mb-3 block">{dish.emoji}</span>
                <h3 className="text-white font-semibold text-base mb-2">{dish.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-4">
            Готовы открыть Японию?
          </h2>
          <p className="text-white/55 text-lg mb-10">
            Оставьте email — и мы пришлём бесплатный путеводитель с лучшими маршрутами,
            секретными местами и советами по японской кухне.
          </p>

          <div className="w-full max-w-md mx-auto">
            {isSubmitted ? (
              <div className="rounded-xl border border-green-500/40 bg-green-900/30 p-5">
                <p className="font-medium text-green-300 text-lg">
                  🎌 Путеводитель уже летит к вам!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <Icon name="Mail" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                  <Input
                    type="email"
                    placeholder="Ваш email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 rounded-xl border border-white/20 bg-white/10 pl-12 text-base text-white placeholder:text-white/40 focus:border-[#e74c3c] focus:ring-0"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 rounded-xl bg-[#c0392b] hover:bg-[#e74c3c] text-white text-base font-semibold transition-all border-0 disabled:opacity-50"
                >
                  {isSubmitting ? "Отправка..." : "Получить путеводитель"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-white/30 text-sm">🌸 Япония — страна, которую нельзя не полюбить</p>
      </footer>
    </div>
  )
}