"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">お問い合わせ</h2>
          <p className="text-gray-600">
            作品のご注文・お問い合わせはこちらからお願いいたします
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <Input type="text" placeholder="山田 太郎" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス
                  </label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    メッセージ
                  </label>
                  <Textarea
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                  />
                </div>
                <Button className="w-full">送信する</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}