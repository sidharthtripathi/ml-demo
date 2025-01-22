import { Construction } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
    <div className="text-center">
      <Construction className="w-24 h-24 text-yellow-500 mx-auto mb-8 animate-pulse" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Construction</h1>
      <p className="text-xl text-gray-600 max-w-md mx-auto">
        We are working hard to bring you something amazing. Please check back soon!
      </p>
    </div>
  </div>
  )
}
