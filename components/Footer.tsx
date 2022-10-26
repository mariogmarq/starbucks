export default function Footer() {
  return (
    <div class="w-screen border-t-2 border-gray-400 flex">
      <div class="mx-auto min-w-[1440px] w-auto flex border-b-2 border-gray-400">
        {columns.map((c) => (
          <div class="mr-5 mt-4 w-[190px]">
            <p class="text-lg font-semibold">{c.name}</p>
            {c.sections.map((s) => <p class="text-gray-500 hover:text-black hover:cursor-pointer my-5 font-semibold">{s}</p>)}
          </div>
        ))}
      </div>
    </div>
  );
}

const columns = [
  {
    name: "About us",
    sections: [
      "Our Company",
      "Our Coffee",
      "Stories and News",
      "Starbucks Archive",
      "Investor Relations",
      "Customer Service",
    ],
  },
  {
    name: "Careers",
    sections: [
      "Culture and Values",
      "Inclusion, Diversity, and Equity",
      "College Achievement Plan",
      "Alumni Community",
      "U.S. Careers",
      "International Careers",
    ],
  },
  {
    name: "Social Impact",
    sections: [
      "People",
      "Planet",
      "Environmental and Social Impact Reporting",
    ],
  },
  {
    name: "For Business Partners",
    sections: [
      "Landlord Support Center",
      "Suppliers",
      "Corporate Gift Card Sales",
      "Office and Foodservice Coffee",
    ],
  },
  {
    name: "Order and Pickup",
    sections: [
      "Order on the App",
      "Order on the Web",
      "Delivery",
      "Order and Pickup Options",
      "Explore and Find Coffee for Home",
    ],
  },
];
