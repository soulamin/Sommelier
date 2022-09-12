<?php

/**
 * 
 * User: ALAN LAMIN
 * Date: 03/06/2022
 * Time: 15:26
 */
require '../fontes/conexao.php';
session_start();
$acao = $_POST['acao'];

switch ($acao) {

    case 'grafico_acesso':
        $quiz  = 'q';
        $lista = 'l';

        $stmt = $pdo->prepare('SELECT count(id) as totalacesso FROM dash_acesso');
        $stmt->execute();
        $totalacesso = $stmt->fetch();

        $stmtquiz = $pdo->prepare('SELECT count(id) as totalquiz FROM dash_acesso WHERE ativacao =:ativacao');
        $stmtquiz->bindParam(':ativacao', $quiz);
        $stmtquiz->execute();
        $totalquiz = $stmtquiz->fetch();

        $stmtlista = $pdo->prepare('SELECT count(id) as totallista FROM dash_acesso WHERE ativacao =:ativacao');
        $stmtlista->bindParam(':ativacao', $lista);
        $stmtlista->execute();
        $totallista = $stmtlista->fetch();



        $resultado['totalacesso'] = $totalacesso['totalacesso'];
        $resultado['totalquiz'] = round(($totalquiz['totalquiz'] / $totalacesso['totalacesso']) * 100, 2);
        $resultado['totallista'] = round(($totallista['totallista'] / $totalacesso['totalacesso']) * 100, 2);

        echo json_encode($resultado);

        break;

    case 'grafico_pergunta':

        $residencial = 'Residencial';
        $informativo = 'Atrair Atenção do Publico';
        $publicidade = 'Publicidade no PDV';
        $menu = 'Menu Board';
        $destacar = 'Destacar produtos e ofertas';

        $st = $pdo->prepare('SELECT count(id) as total FROM dash_pergunta');
        $st->execute();
        $total = $st->fetch();

        $stmtr = $pdo->prepare('SELECT count(id) as totalr FROM dash_pergunta WHERE tipo like :pergunta');
        $stmtr->bindParam(':pergunta', $residencial);
        $stmtr->execute();
        $totalr = $stmtr->fetch();


        $stmti = $pdo->prepare('SELECT count(id) as totali FROM dash_pergunta WHERE tipo = :pergunta');
        $stmti->bindParam(':pergunta', $informativo);
        $stmti->execute();
        $totali = $stmti->fetch();

        $stmtm = $pdo->prepare('SELECT count(id) as totalm FROM dash_pergunta WHERE tipo = :pergunta');
        $stmtm->bindParam(':pergunta', $menu);
        $stmtm->execute();
        $totalm = $stmtm->fetch();

        $stmtp = $pdo->prepare('SELECT count(id) as totalp FROM dash_pergunta WHERE tipo = :pergunta');
        $stmtp->bindParam(':pergunta', $publicidade);
        $stmtp->execute();
        $totalp = $stmtp->fetch();

        $stmtd = $pdo->prepare('SELECT count(id) as totald FROM dash_pergunta WHERE tipo = :pergunta');
        $stmtd->bindParam(':pergunta', $destacar);
        $stmtd->execute();
        $totald = $stmtd->fetch();


        $resultado['totalr'] = $totalr['totalr']==0 ? 0.0: round(($totalr['totalr']/$total['total']) * 100,1);
        $resultado['totalm'] = $totalm['totalm']==0 ? 0.0:round(($totalm['totalm']/$total['total']) * 100,1);
        $resultado['totali'] = $totali['totali']==0 ? 0.0:round(($totali['totali']/$total['total']) * 100,1);
        $resultado['totalp'] = $totalp['totalp']==0 ? 0.0:round(($totalp['totalp']/$total['total']) * 100,1);
        $resultado['totald'] = $totald['totald']==0 ? 0.0:round(($totald['totald']/$total['total']) * 100,1);


        echo json_encode($resultado);

        break;
    case 'grafico_produto':
        
        $retail = 'The Retail';
        $out = 'The Out';
        $display = 'The Display';
        $wall = 'The wall';
        $thetv = 'TheTV';
        $megabanner = 'The Megabanner';
        $poster = 'The Poster';
        $square = 'The Square';

        $stmtw = $pdo->prepare('SELECT count(id) as totalw FROM dash_produto WHERE produto LIKE :produto');
        $stmtw->bindParam(':produto', $wall);
        $stmtw->execute();
        $totalw = $stmtw->fetch();


        $stmtr = $pdo->prepare('SELECT count(id) as totalr FROM dash_produto WHERE produto LIKE :produto');
        $stmtr->bindParam(':produto', $retail);
        $stmtr->execute();
        $totalr = $stmtr->fetch();

        $stmtt = $pdo->prepare('SELECT count(id) as totalt FROM dash_produto WHERE produto LIKE :produto');
        $stmtt->bindParam(':produto', $thetv);
        $stmtt->execute();
        $totalt = $stmtt->fetch();

        $stmto = $pdo->prepare('SELECT count(id) as totalo FROM dash_produto WHERE produto LIKE :produto');
        $stmto->bindParam(':produto', $out);
        $stmto->execute();
        $totalo = $stmto->fetch();

        $stmtm = $pdo->prepare('SELECT count(id) as totalm FROM dash_produto WHERE produto LIKE :produto');
        $stmtm->bindParam(':produto', $megabanner);
        $stmtm->execute();
        $totalm = $stmtm->fetch();

        $stmtp = $pdo->prepare('SELECT count(id) as totalp FROM dash_produto WHERE produto LIKE :produto');
        $stmtp->bindParam(':produto', $poster);
        $stmtp->execute();
        $totalp = $stmtp->fetch();

        $stmtd = $pdo->prepare('SELECT count(id) as totald FROM dash_produto WHERE produto LIKE :produto');
        $stmtd->bindParam(':produto', $display);
        $stmtd->execute();
        $totald = $stmtd->fetch();

        $stmts = $pdo->prepare('SELECT count(id) as totals FROM dash_produto WHERE produto LIKE :produto');
        $stmts->bindParam(':produto', $square);
        $stmts->execute();
        $totals = $stmts->fetch();


        $resultado['totalr'] = round($totalr['totalr']);
        $resultado['totalt'] = round($totalt['totalt']);
        $resultado['totalm'] = round($totalm['totalm']);
        $resultado['totalw'] = round($totalw['totalw']);
        $resultado['totalp'] = round($totalp['totalp']);
        $resultado['totald'] = round($totald['totald']);
        $resultado['totalo'] = round($totalo['totalo']);
        $resultado['totals'] = round($totals['totals']);


        echo json_encode($resultado);

        break;
        case 'grafico_plataforma':

    
            $st = $pdo->prepare('SELECT count(id) as total FROM dash_acesso');
            $st->execute();
            $total = $st->fetch();
    
    
    
            $resultado['total'] = round($total['total']);
            $resultado['totalled'] = round($total['total']*1.5);
            $resultado['totalbee'] = round($total['total']*1.8);
    
    
            echo json_encode($resultado);
    
            break;
}
