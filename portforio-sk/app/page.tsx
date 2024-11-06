import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // スクロールアニメーションのフックをセクションごとに一度だけ呼び出す
  const skillsScrollAnimation = useScrollAnimation();
  const projectsScrollAnimation = useScrollAnimation();
  const contactScrollAnimation = useScrollAnimation();

  // カードのアニメーション定義
  const cardVariants = {
    hidden: { opacity: 0, x: 100, y: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">YourName</a>
          <nav className="hidden md:flex space-x-4">
            <a href="#skills" className="hover:text-primary">スキル</a>
            <a href="#projects" className="hover:text-primary">プロジェクト</a>
            <a href="#contact" className="hover:text-primary">コンタクト</a>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <a href="#skills" className="block px-4 py-2 hover:bg-accent" onClick={toggleMenu}>スキル</a>
            <a href="#projects" className="block px-4 py-2 hover:bg-accent" onClick={toggleMenu}>プロジェクト</a>
            <a href="#contact" className="block px-4 py-2 hover:bg-accent" onClick={toggleMenu}>コンタクト</a>
          </nav>
        )}
      </header>

      {/* ヒーローセクション */}
      <section className="py-20 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {Array.from('技術者 YourName').map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          フルスタック開発者 & 問題解決のスペシャリスト
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </motion.div>
      </section>

      {/* スキルセクション */}
      <section id="skills" className="py-20 bg-muted">
        <motion.div
          className="container mx-auto px-4 overflow-hidden"
          ref={skillsScrollAnimation.ref}
          animate={skillsScrollAnimation.controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['フロントエンド', 'バックエンド', 'その他'].map((skill, index) => (
              <motion.div
                key={skill}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Code className="mr-2" />
                      {skill}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* プロジェクトセクション */}
      <section id="projects" className="py-20">
        <motion.div
          className="container mx-auto px-4 overflow-hidden"
          ref={projectsScrollAnimation.ref}
          animate={projectsScrollAnimation.controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['プロジェクト 1', 'プロジェクト 2'].map((project, index) => (
              <motion.div
                key={project}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{project}</CardTitle>
                    <CardDescription>{index === 0 ? 'Webアプリケーション' : 'モバイルアプリ'}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>プロジェクトの詳細説明をここに記述します。使用した技術やチャレンジした点などを含めます。</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">詳細を見る</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* コンタクトセクション */}
      <section id="contact" className="py-20 bg-muted">
        <motion.div
          className="container mx-auto px-4 overflow-hidden"
          ref={contactScrollAnimation.ref}
          animate={contactScrollAnimation.controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h2>
          <div className="max-w-md mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>メッセージを送る</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-1">お名前</label>
                      <input type="text" id="name" className="w-full p-2 border rounded" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1">メールアドレス</label>
                      <input type="email" id="email" className="w-full p-2 border rounded" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-1">メッセージ</label>
                      <textarea id="message" rows={4} className="w-full p-2 border rounded" required></textarea>
                    </div>
                    <Button type="submit" className="w-full">送信</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
