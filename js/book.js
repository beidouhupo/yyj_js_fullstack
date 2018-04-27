// 图书馆
function Book(isbn, title, auther) {
    this._setIsbn(isbn);
    this.title = title || '未给标题';
    this.auther = auther || '未给作者';
}
Book.prototype._setIsbn = function(isbn) {
    if (this._checkIsbn()) {
        this.isbn = isbn
    }else {
        throw new Error('isbn有误');
    }
}
Book.prototype.borrow = function() {

}
Book.prototype._checkIsbn = function(isbn) {
    return /[0-9]{10}/.test(isbn);
}
Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuther = function() {
    return this.auther;
}

var book = new Book('sjs1212', '三国演义', '罗贯中');