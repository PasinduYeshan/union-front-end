import React from "react";
import { motion } from "framer-motion";

const WordAboutUs = () => {
  return (
    < >
      <div class="bg-inherit">
        <div className="mx-5 my-10  grid grid-cols-1 gap-8 lg:grid-cols-2 p-2">
                  <motion.div
                      className="shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0 ,x : -60, y : 60}}
            animate={{
                opacity: 1,
                x: 0,
                y : 0
            }}
            transition={{ duration: 2,  }}
          >
            <img
              src="images/landing/c1.jpg"
              className="h-full w-full object-cover max-h-100"
            ></img>
          </motion.div>
          <motion.div className=""
            initial={{ opacity: 0 ,x : 100, y : -60}}
            animate={{
                opacity: 1,
                x : 0, y : 0
            }}
            transition={{ duration: 2,  }}>
            <div className="row">
              <h1 className="text-2xl tracking-tight font-semibold text-gray-700 sm:text-2xl md:text-3xl">
                <span className="block xl:inline">A Few Words About Us</span>
              </h1>
              <p className="mt-3 text-base text-black-500 text-md text-justify">
                Sri Lanka post started her journey from 1798 The first trade
                union of Sri Lanka Post is "Post And Telegraph Association". The
                UPTO started her history on 1945 just after breakdown the "Post
                And Telegraph Association". The UPTO started her history named
                as "Post Masters' Association"
              </p>

              <p className="mt-3 text-base text-black-500 text-md text-justify">
                1945 1947 Leader of Post Masters' Association Lion is Brother A.
                Sampanthar As our first request we obtain a salary Increment and
                the quarters to post masters by trade union activity. In 1947
                our leader Brother A. Sampanthar was interdicted for being in a
                rally at Gallface conducted by government clear?s union. As a
                result of that rally converted to the huge strike by workers. In
                this time our union leaded by Brother P.M.GWijayasooriya. The
                president in 1962 is Mr Wilfred Peraraand also Hon secretary is
                S.V joshap. In the next era of our union leaded by brother p.
                kanagarathnem. In his era we can increased our members 100 to
                700.it was our victory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WordAboutUs;
