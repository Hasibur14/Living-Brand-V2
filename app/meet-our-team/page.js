import MeetOurTeam from "@/components/About/MeetOurTeam";

const page = () => {
    return (
        <div className="mx-4 lg:mx-72">
            <div className="flex justify-center mt-20 mb-24 md:mb-44">
                <h2 className="text-2xl  md:text-5xl font-bold">
                Our Team
                </h2>

            </div>
            <MeetOurTeam />
        </div>
    );
};

export default page;