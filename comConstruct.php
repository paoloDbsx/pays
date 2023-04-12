 <?php

// comments
if (isset($_POST['comment'])){
$com = filter_input(
    INPUT_POST,
    "comment",
);


class DB extends PDO
{
    function __construct()
    {
        parent::__construct(
            'mysql:host=localhost;dbname=europa;charset=utf8',
            'root'
        );
    }
}

class comment extends DB{

private $txt;
private $user_id;

function __construct(string $t, int $i){
    parent::__construct();
    $this->txt = $t;
    $this->user_id = $i;
}
function newComment(){
    $resultC = $this->prepare("INSERT INTO comments(comment, user_id) VALUES (:comment, :user_id)");
    $resultC->bindParam(':comment', $this->txt);
    $resultC->bindParam(':user_id', $this->user_id);
    $resultC->execute();
}
}

$comment = new comment($com, $_SESSION['user_id']);
$comment->newComment();

}