import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Hyderabad', image: 'https://www.nobroker.in/blog/wp-content/uploads/2022/02/Property-rates-in-Hyderabad-1.jpg' },
  { name: 'Bangalore', image: 'http://www.manahotels.in/traveller/wp-content/uploads/2013/02/banglore1.jpg' },
  { name: 'Mumbai', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80' },
  { name: 'Delhi', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80' },
  { name: 'Chennai', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80' },
  { name: 'Pune', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80' },
  { name: 'Kolkata', image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80' },
  { name: 'Ahmedabad', image: 'https://www.trawell.in/admin/images/upload/144404795Ahmedabad_Riverfront.jpg' },
  { name: 'Narasaraopet', image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/a8/5a/f6/fb-img-1505406262102.jpg' },
  { name: 'Guntur', image: 'https://i.ytimg.com/vi/BmpUgVjceR8/maxresdefault.jpg' },
  { name: 'Vijayawada', image: 'https://mediaim.expedia.com/destination/1/4aea26e620e702e864eb259a60e385bc.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh' }
];

function Cities() {
  return (
    <section id="cities" className="py-20 relative bg-gradient-secondary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Available in <span className="text-gradient">Major Cities</span>
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            Expanding our doorstep mechanic service across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={20} />
                    <h3 className="text-white font-bold text-lg font-display tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {city.name}
                    </h3>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-200 text-lg font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
            More cities coming soon! Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Cities;
