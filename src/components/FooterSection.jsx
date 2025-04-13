function FooterSection({ resourcesLinks, platformLinks, communityLinks }) {
  return (
    <>
      <div className="w-full h-fit flex flex-col sm:flex-row border-t border-neutral-800 pb-10">
        <FooterItem title="Resources" data={resourcesLinks} />
        <FooterItem title="Platform" data={platformLinks} />
        <FooterItem title="Community" data={communityLinks} />
      </div>
    </>
  );
}

export default FooterSection;

function FooterItem({ title, data }) {
  return (
    <div className="w-full sm:w-1/3 p-4 sm:pl-10 text-center sm:text-left">
      <h5 className="text-xl sm:text-lg font-semibold">{title}</h5>
      <span className="bg-orange-500 w-1/5 h-0.5 inline-block"></span>
      <ul className="flex flex-col space-y-2 mt-4 text-neutral-400">
        {data.map((item, index) => (
          <li
            key={index}
            className="text-sm hover:text-orange-500 transition-colors duration-300"
          >
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
