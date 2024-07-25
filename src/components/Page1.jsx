import '../../static/fonts/fonts.css'

function Page1(props) {
    return (
        <div className="relative min-h-screen flex bg-stone-200">
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-12">
                <div className="text-4xl">
                    This is the text with default Tailwind Font, sans-serif
                </div>
                <div className="text-4xl font-KG">
                    This is the text with the Google Font `font-KG` class applied
                </div>
                <div className="text-4xl font-Brockmann">
                    This is the text with the Custom Font File 'brockmann-medium.ttf' applied
                </div>
                 <div className="brockmann1">
                    This is the text with the Custom Font Classes
                </div>
            </div>
        </div>
    );
}

export default Page1;
