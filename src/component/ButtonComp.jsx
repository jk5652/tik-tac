const Buttoncomp = ({ text, bg, shadow, onClick }) => {
    return (
        <button
        type="button"
        onClick={onClick}
        className={`p-[10Px] border-none flex items-center justify-center text-[#1a2a33] font-bold text-sm cursor-pointer rounded-[10px] w-full`}
            style={{
                backgroundColor: bg,
                boxShadow: shadow
            }}
        >

            {text}
        </button>
    );

}
export default Buttoncomp;