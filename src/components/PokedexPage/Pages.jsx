const Pages = () => {
    
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const lastPage = startIndex / itemsPerPage + 1;

  return <div>Pages</div>;
};

export default Pages;
