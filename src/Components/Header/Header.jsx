import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between mx-4 p-4 border-b-2 items-center'>
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1> 
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;