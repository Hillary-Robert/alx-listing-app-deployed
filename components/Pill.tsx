interface PillProps {
  label: string;
  active?: boolean;
}

const Pill = ({ label, active }: PillProps) => {
  return (
    <button className={`px-4 py-2 border rounded-full text-sm mr-2 mb-2 ${active ? 'bg-black text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}>
      {label}
    </button>
  );
};

export default Pill;
