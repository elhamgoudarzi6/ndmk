"use client";

const Clip = () => {
    return (
        <section className="w-full mx-auto my-20">
            <video className="w-full" autoPlay muted loop playsInline>
                <source src="/assets/images/4.mp4" type="video/mp4" />
            </video>
        </section>
    );
};

export default Clip;


