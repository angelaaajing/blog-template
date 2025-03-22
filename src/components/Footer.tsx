const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Simple React Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer 