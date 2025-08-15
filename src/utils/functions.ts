//random-Number-Generator
export default function generateRandomNumber() {
    const min = 10000000; // Minimum 8-digit number
    const max = 99999999; // Maximum 8-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export const playButtonSoundEffect = (soundSrc: string) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };
  
  export function convertDateFormat(inputDate: string): string {
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const [year, month, day] = inputDate.split("-").map(Number);
    const monthName: string = months[month - 1];
  
    // Ensure day is parsed as a number before calling toString
    const formattedDay: string = day?.toString().padStart(2, "0");
  
    return `${monthName} ${formattedDay}, ${year}`;
  }