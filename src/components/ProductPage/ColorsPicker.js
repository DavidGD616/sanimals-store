import { CheckIcon } from "../../svg/CheckIcon";

function ColorsPicker() {
    const colors = [
        { bg: "bg-[#2563EB]", ring: "ring-[#2563EB]" },
        { bg: "bg-[#8B5CF6]", ring: "ring-[#8B5CF6]" },
        { bg: "bg-[#DB2777]", ring: "ring-[#DB2777]" },
        { bg: "bg-[#475569]", ring: "ring-[#475569]" },
        { bg: "bg-[#EA580C]", ring: "ring-[#EA580C]" }
    ];

    return (
        <ul className="mt-4 mb-8 flex items-center flex-wrap gap-4">
              {
                colors.map((item, idx) => (
                  <li key={idx} className="flex-none">
                            <label htmlFor={item.bg} className="block relative w-8 h-8">
                                <input id={item.bg} type="radio" defaultChecked={idx === 1 ? true : false} name="color" class="sr-only peer" />
                                <span className={`inline-flex justify-center items-center w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150 ${item.bg} ${item.ring}`}>
                                </span>
                                <CheckIcon />
                            </label>
                        </li>
                ))
              }
            </ul>
    )
}

export { ColorsPicker };