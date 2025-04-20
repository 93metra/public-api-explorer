import AppHeader from "@/src/components/app-header/app-header";
import RandomDogImage from "@/src/components/apis/random-dog-image/random-dog-image";

export default function randomDogImage() {
  return (
    <>
      <AppHeader />
      <RandomDogImage />
    </>
  )
}