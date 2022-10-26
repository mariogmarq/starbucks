import { Head } from "$fresh/runtime.ts";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/navbar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starbucks Coffee Company</title>
      </Head>
      <Navbar />
      <Cards />
      <Footer />
    </>
  );
}


function Cards() {
  return (
      <div class="w-screen">
        <div class="text-white">
          <Card
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg"
            color="#006241"
          >
            <h1 class="text-6xl font-bold pb-6 mx-auto max-w-lg">
              Perfectly pumpkin
            </h1>
            <p class="text-2xl font-medium mx-auto max-w-lg">
              Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold
              Brew.
            </p>

            <div class="flex content-around py-5">
              <p class="text-lg font-bold border-white border-1 rounded-2xl px-2 py-0.5 ml-auto mr-auto">
                Order now
              </p>
            </div>
          </Card>
        </div>

        <div class="text-white">
          <Card
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81198.jpg"
            color="#006241"
            photoRight
          >
            <h1 class="text-6xl font-semibold pb-6 mx-auto max-w-lg">
              Pairs well with crisp mornings
            </h1>
            <p class="text-2xl font-medium mx-auto max-w-lg">
              Discover the nondairy layers of Apple Crisp Oatmilk Macchiato, now
              with Starbucks® Blonde Espresso.
            </p>

            <div class="flex content-around py-5">
              <p class="text-lg font-bold border-white border-1 rounded-2xl px-2 py-0.5 ml-auto mr-auto">
                Learn more
              </p>
            </div>
          </Card>
        </div>

        <div class="text-white">
          <Card
            img="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81199.jpg"
            color="#006241"
          >
            <h1 class="text-6xl font-semibold pb-6 mx-auto max-w-lg">
              Spice up your fall
            </h1>
            <p class="text-2xl font-medium mx-auto max-w-lg">
              Warm your senses with the delightfully creamy Chai Tea Latte. Try
              it hot or iced.
            </p>

            <div class="flex content-around py-5">
              <p class="text-lg font-bold border-white border-1 rounded-2xl px-2 py-0.5 ml-auto mr-auto">
                Learn more
              </p>
            </div>
          </Card>
        </div>
      </div>
  );
}