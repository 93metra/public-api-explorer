import AppHeader from "@/src/components/app-header/app-header";
import RandomJoke from "@/src/components/apis/random-joke/random-joke";

export default function randomDogImage() {
  return (
    <>
      <AppHeader />
      <RandomJoke />
    </>
  )
}