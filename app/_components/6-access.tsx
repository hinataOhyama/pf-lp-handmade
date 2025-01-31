"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Access = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">アクセス</h2>
          <p className="text-gray-600">お気軽にお立ち寄りください</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-light mb-2">住所</h3>
                    <p className="text-gray-600">
                      〒859-5122
                      <br />
                      長崎県平戸市明の川内町323番地2
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-light mb-2">電話番号</h3>
                    <p className="text-gray-600">0950-22-7056</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-light mb-2">メールアドレス</h3>
                    <p className="text-gray-600">info@handmade-studio.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-light mb-2">営業時間</h3>
                    <p className="text-gray-600">
                      平日: 10:00 - 18:00
                      <br />
                      土日祝: 11:00 - 17:00
                      <br />
                      定休日: 水曜日
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.940589658236!2d129.5491699!3d33.3679821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIyJzA0LjciTiAxMjnCsDMyJzU3LjAiRQ!5e0!3m2!1sja!2sjp!4v1624926234567!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}