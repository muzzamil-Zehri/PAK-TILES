
document.getElementById('searchIcon').addEventListener('click', function () {
    document.getElementById('searchBar').classList.toggle('show-search-bar');
});

document.getElementById('closeSearch').addEventListener('click', function () {
    document.getElementById('searchBar').classList.remove('show-search-bar');
});

