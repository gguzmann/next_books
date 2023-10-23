export default function PageBook () {
  return (
        <section className="p-5">

            <div className="container flex items-start gap-8 px-4 md:px-6">
                <div className="space-y-6">
                    <div className="flex gap-8">
                        {/* <img src='https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg' width="200" height="200"
                            alt="Sneaker Image" className="aspect-[1/1] object-contain object-center" /> */}
                            <img className="w-60 object-center" src='https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg' alt="Sunset in the mountains"/>
                        <div>

                            <h1 className="text-4xl font-bold tracking-tighter">
                                Classic Sneakers
                            </h1>
                            <p>Andres Almiray</p>
                            <div className="flex space-x-1 mt-1">
                                {new Array(5).fill('').map((x, i) => (
                                    <svg key={i} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg>
                                ))}
                            </div>
                            <ul className="mt-5">
                                <li>publishedDate</li>
                                <li>pageCount</li>
                                <li>isbn</li>
                                <li>categories</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-base text-zinc-500 dark:text-zinc-400">
                        Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development
                    </p>
                    <button
                        className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
  )
}
