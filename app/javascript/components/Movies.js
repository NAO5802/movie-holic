import React from "react"
import PropTypes from "prop-types"
import Movie from "./Movie"
import Player from "./Player"

class Movies extends React.Component {

  constructor(props) {
    super(props);
    this.state={isPlayerOn: false};
    this.setPlayer = this.setPlayer.bind(this)
  }

  setPlayer(value) {
    this.setState({isPlayerOn: value})
  }


  render () {


    const movieList = [
      {
        name: 'トイ・ストーリー4 （吹替版）',
        image: 'https://i.ytimg.com/vi_webp/zQHmycgzwNs/movieposter.webp',
        summary: '新たな持ち主ボニーを見守るウッディ、バズらの前に現れたのは、ボニーのお気に入りで手作りおもちゃのフォーキー。彼は自分をゴミだと思い込み逃げ出してしまう…。フォーキーを救おうと旅にでたウッディやバズたちはピンチに！運命的な出会い、スリルあふれる冒険を経て、ウッディが目にする新たな世界とは？ウッディやおなじみの仲間たちの新たな旅立ちと冒険を描く「トイ・ストーリー」史上最大の感動のアドベンチャー。',
        movie_url: 'https://youtu.be/GMKxBGPhfQc',
      },
      {
        name: 'キングダム',
        image: 'https://i.ytimg.com/vi/S3Nt8s0Eb-0/movieposter.jpg',
        summary: '紀元前245年、春秋戦国時代、中華・西方の国「秦」。戦災孤児の少年の信と漂は、いつか天下の大将軍になることを夢見て日々剣術の鍛練を積んでいた。ある日、漂は王都の大臣である昌文君によって召し上げられ王宮へ。信と漂の二人は別の道を歩むことになる…。王宮では王の弟・成蟜によるクーデターが勃発。戦いの最中、漂は致命傷を負うが、何とか信のいる納屋にたどり着く。「お前に頼みたいことがある」血まみれの手に握られていたのは、ある丘に建つ小屋を示す地図だった。「今すぐそこに行け！…お前が羽ばたけば、俺もそこにいる…。信！俺を天下に連れて行ってくれ…」力尽きる漂。漂が手にしていた剣とその地図を握りしめ、信は走り出した。たどり着いた先で、信の目に飛び込んできたのは、冷静にたたずむ漂の姿だった！？死んだはずの漂がなぜ―',
        movie_url: 'https://youtu.be/3b-RYwp7_ro',
      },
      {
        name: '名探偵ピカチュウ',
        image: 'https://i.ytimg.com/vi/O6ebtJJd2jU/movieposter.jpg',
        summary: 'かつてポケモンのことが大好きな少年だったティムは、ポケモンに関わる事件の捜査へ向かったきり、家に戻らなかった父親・ハリーとポケモンを、遠ざけるようになってしまった。それから年月が経ち、大人になったティムのもとにある日、ハリーと同僚だったというヨシダ警部補から電話がかかってくる。「お父さんが事故で亡くなった―」。複雑な思いを胸に残したまま、ティムは人間とポケモンが共存する街・ライムシティへと向かう。荷物を整理するため、ハリーの部屋へと向かったティムが出会ったのは、自分にしか聞こえない人間の言葉を話す、名探偵ピカチュウだった。かつてハリーの相棒だったという名探偵ピカチュウは、事故の衝撃で記憶を失っていたが、一つだけ確信をもっていることがあった……。「ハリーはまだ生きている」。ハリーは何故、姿を消したのか？ ライムシティで起こる事件の謎とは？ ふたりの新コンビが今、大事件に立ち向かう！',
        movie_url: 'https://youtu.be/LIYsx_6Bz4U',
      },
      {
        name: 'メン・イン・ブラック ： インターナショナル （吹替版）',
        image: 'https://i.ytimg.com/vi/e-LKGxcoHGM/movieposter.jpg',
        summary: '黒いサングラスでブラックスーツに身を包み、地球上に生息するエイリアンの監視・取り締まりを行う最高機密機関「メン・イン・ブラック」(MIB)。エリート新人女性エージェントMは、ロンドン支部でイケメンチャラ男だが敏腕のエージェントHとチームを組み、MIB内部に潜伏するスパイを摘発する任務にあたる。エージェントの姿に化けたエイリアンを探す為、イギリス、フランス、モロッコと世界各国で捜査を進める二人に危機が迫っていた。スパイが仕掛けた裏工作により、逆に二人はMIBから追われる身となってしまう―。',
        movie_url: 'https://youtu.be/CY-A_kpnO0A',
      },
      {
        name: 'グリーンブック（字幕版／吹替版）',
        image: 'https://i.ytimg.com/vi/sN887fq6ryc/movieposter.jpg',
        summary: '時は1962年、ニューヨークの一流ナイトクラブ、コパカバーナで用心棒を務めるトニー・リップは、ガサツで無学だが、腕っぷしとハッタリで家族や周囲に頼りにされていた。ある日、トニーは、黒人ピアニストの運転手としてスカウトされる。彼の名前はドクター・シャーリー、カーネギーホールを住処とし、ホワイトハウスでも演奏したほどの天才は、なぜか差別の色濃い南部での演奏ツアーを目論んでいた。二人は、〈黒人用旅行ガイド＝グリーンブック〉を頼りに、出発するのだが─。',
        movie_url: 'https://youtu.be/awUd_khNEcc',
      },
      {
        name: 'アラジン （字幕版）',
        image: 'https://i.ytimg.com/vi/ZN_7RYFeQP0/movieposter.jpg',
        summary: '世代を超えて愛され続ける『アラジン』をディズニーが空前のスケールで実写映画化！ 貧しくも清らかな心を持ち、人生を変えたいと願っている青年アラジンが巡り合ったのは、王宮の外の世界での自由を求める王女ジャスミンと、"３つの願い"を叶えることができる"ランプの魔人"ジーニー。果たして3人はこの運命の出会いによって、それぞれの"本当の願い"に気づき、それを叶えることはできるのか？胸躍る"冒険アクション"と、身分を超えた"真実の愛"を描いた、すべての人に贈る究極のエンターテイメント。',
        movie_url: 'https://youtu.be/MnyAkbC9Cws',
      },
      {
        name: 'ファンタスティック・ビーストと黒い魔法使いの誕生 (字幕版)',
        image: 'https://i.ytimg.com/vi/3kQh11bvdIw/movieposter.jpg',
        summary: 'ハリー・ポッター』の原作者が贈る、新たな魔法世界　捕らえられていた強大な“黒い魔法使い”ゲラート・グリンデルバルドが逃走する。その一報を受け、魔法動物学者ニュート・スキャマンダーは、ホグワーツ魔法魔術学校の恩師アルバス・ダンブルドアに呼び出される。予測不能な危険に立ち向かいながら、ニュートはグリンデルバルドの企みを阻止できるのか。純血の魔法使いが非魔法族を支配すべきというグリンデルバルドの思想によって、今、魔法世界全体が分断されようとしている。',
        movie_url: 'https://youtu.be/wVQODSPkGT8',
      },
      {
        name: 'X-MEN：ダーク・フェニックス （吹替版）',
        image: 'https://i.ytimg.com/vi/tZCte13m-c0/movieposter.jpg',
        summary: 'マーベル史上最強のダークサイドが暴走する！X-MENシリーズ、ついに最終章！X-MENは人類と共存し平和を守っていた。ある日、主要メンバーのジーン･グレイが、宇宙でのミッション中の事故によって謎の熱放射を浴びてしまう。そして、心の闇に潜んでいた彼女のもう一つの人格"ダーク・フェニックス"が覚醒。仲間たちは彼女を救おうと手を差し伸べるが、彼女の解き放った力が予期せぬ悲劇を引き起こしてしまうのだった。そんな中、謎の女がジーンに近づき彼女の力を利用しようとしていた…。暴走するジーンの強大な力により絶体絶命の危機が迫る中、彼女を殺すべきか否かで意見を対立させるミュータントたち。果たして、最強の敵"ダーク・フェニックス"に立ち向かう術はあるのか――。',
        movie_url: 'https://youtu.be/jlvA9lQJox0',
      },
    ];

    let test = this.state.isPlayerOn
    
    return (
      <React.Fragment>

        <Player
          player_state={this.state}
          setPlayer={this.setPlayer}
        />
        <p>test変数：{test}</p>

        <div class="low-contents">
          <div class="low-contents__elements">
          <h1 class="low-contents__elements--caption">新着映画</h1>
            <p>{movieList.map((movieItem)=>{
              return (
                <Movie 
                  name={movieItem.name}
                  image={movieItem.image}
                  summary={movieItem.summary}
                />
              )
            })}</p>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Movies







