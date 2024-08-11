const questions = [
    // 海底轮题目
    {
        question: "你在团队中负责一个重要项目，但突然出现了紧急情况。你的反应是：",
        chakra: "root",
        options: [
            { text: "冷静处理，合理分配任务，确保项目顺利进行", score: 3 },
            { text: "感到有些紧张，但仍能部分处理问题，需要他人帮助", score: 2 },
            { text: "十分紧张，不知所措，无法有效应对", score: 1 },
            { text: "过于自信，独自承担所有责任，忽略团队协作", score: 0 }
        ],
    },
    {
        question: "在公司年度评审中，你对自己的表现和贡献感到：",
        chakra: "root",
        options: [
            { text: "基本满意，但意识到有改进空间", score: 3 },
            { text: "有些不安，担心自己表现不佳", score: 2 },
            { text: "非常不安，觉得自己没有做出任何贡献", score: 1 },
            { text: "完全满意，认为自己不需要再改进", score: 0 }
        ],
    },
    {
        question: "当你与同事讨论工作时，遇到意见不合的情况，你会：",
        chakra: "root",
        options: [
            { text: "理性沟通，愿意听取对方意见并达成共识", score: 3 },
            { text: "有些不安，但还是表达自己的看法", score: 2 },
            { text: "不敢表达意见，完全服从对方", score: 1 },
            { text: "强烈坚持自己的观点，不愿妥协", score: 0 }
        ],
    },
    {
        question: "你在公司财务状况不稳定时，会：",
        chakra: "root",
        options: [
            { text: "适度调整支出，确保基本生活质量", score: 3 },
            { text: "有些担心，但仍维持正常开支", score: 2 },
            { text: "感到极度焦虑，不知如何应对", score: 1 },
            { text: "过度储蓄，减少所有开支，即使是必要的", score: 0 }
        ],
    },
    {
        question: "你在家中独自处理突发的紧急维修问题，或在面对突如其来的变动时（如搬家或换工作），会：",
        chakra: "root",
        options: [
            { text: "冷静分析问题，考虑请专业人士帮助", score: 3 },
            { text: "感到有些不安，但尝试自行解决", score: 2 },
            { text: "非常紧张，不敢动手，等待他人解决", score: 1 },
            { text: "完全自信，认为自己可以解决一切问题", score: 0 }
        ],
    },
    {
        question: "当你面临经济压力时，你的反应是：",
        chakra: "root",
        options: [
            { text: "寻找额外的收入来源，积极解决问题", score: 3 },
            { text: "有些焦虑，但尝试寻找解决方法", score: 2 },
            { text: "感到无助，不知道该怎么办", score: 1 },
            { text: "过度担忧，过度节省", score: 0 }
        ],
    },
    {
        question: "当你面对新的项目或任务时，你的投入程度是：",
        chakra: "root",
        options: [
            { text: "全情投入，尽力完成每一个细节", score: 3 },
            { text: "感到有些不安，但仍尽力完成", score: 2 },
            { text: "感到压力巨大，难以开始或完成任务", score: 1 },
            { text: "过度投入，忽略休息和其他生活需求", score: 0 }
        ],
    },
    {
        question: "在日常生活中，你是否经常感到精力充沛，能够高效完成所有任务？",
        chakra: "root",
        options: [
            { text: "总是感到充满精力，能够高效完成任务", score: 3 },
            { text: "偶尔感到疲惫，但仍能完成任务", score: 2 },
            { text: "经常感到疲惫不堪，难以完成任务", score: 1 },
            { text: "精力过剩，无法安静下来", score: 0 }
        ],
    },
    {
        question: "当你计划进行一项新的活动或爱好时，你的态度是：",
        chakra: "root",
        options: [
            { text: "感到兴奋并积极参与", score: 3 },
            { text: "有些犹豫，但仍愿意尝试", score: 2 },
            { text: "感到无趣，不愿参与", score: 1 },
            { text: "过度兴奋，无法集中注意力", score: 0 }
        ],
    },
    {
        question: "在与伴侣的亲密关系中，你的表现是：",
        chakra: "root",
        options: [
            { text: "感到安全和满足，能够自由表达爱意", score: 3 },
            { text: "有些紧张，但愿意尝试沟通", score: 2 },
            { text: "感到疏离，不愿亲密接触", score: 1 },
            { text: "过度依赖伴侣，缺乏自我空间", score: 0 }
        ],
    },
    {
        question: "在他人眼中，你是否被认为是一个踏实可靠的人？",
        chakra: "root",
        options: [
            { text: "经常被认为是可靠和可信赖的", score: 3 },
            { text: "偶尔会被质疑，但大多数时候表现稳定", score: 2 },
            { text: "经常被认为不够可靠和稳重", score: 1 },
            { text: "过度追求完美，有时会显得不够灵活", score: 0 }
        ],
    },
    {
        question: "在处理突发健康问题（如突然感到严重不适）或突发状况（如交通事故）时，你的反应是：",
        chakra: "root",
        options: [
            { text: "冷静应对，采取有效措施", score: 3 },
            { text: "有些不安，但仍能部分处理问题", score: 2 },
            { text: "感到极度恐惧，不知所措", score: 1 },
            { text: "过度恐慌，无法冷静", score: 0 }
        ],
    },
    {
        question: "在追求个人目标时，你的态度是：",
        chakra: "root",
        options: [
            { text: "积极进取，努力实现目标", score: 3 },
            { text: "有些犹豫，但仍坚持努力", score: 2 },
            { text: "感到困惑，难以坚持目标", score: 1 },
            { text: "过度执着，忽略身边其他事物", score: 0 }
        ],
    },
    {
        question: "你对性的态度是：",
        chakra: "root",
        options: [
            { text: "感到开放和舒适，能够自由表达性需求", score: 3 },
            { text: "有些紧张，但愿意探索", score: 2 },
            { text: "感到不安，不愿谈论或体验性", score: 1 },
            { text: "过度依赖性关系，忽视其他方面的需求", score: 0 }
        ],
    },
    {
        question: "你是否经常感到资源不足或害怕失去现有的资源（如金钱、时间、机会等）？",
        chakra: "root",
        options: [
            { text: "很少感到匮乏，相信自己有足够的资源", score: 3 },
            { text: "偶尔感到匮乏，但能积极寻找资源", score: 2 },
            { text: "经常感到匮乏和焦虑，难以满足现状", score: 1 },
            { text: "过度担心失去资源，总是想要更多", score: 0 }
        ],
    },
    // 脐轮题目
    {
        question: "你和闺蜜之间的相处方式通常是：",
        chakra: "sacral",
        options: [
            { text: "定期见面，分享彼此的生活和情感", score: 3 },
            { text: "偶尔见面，但不常分享内心", score: 2 },
            { text: "很少联系，感到疏离", score: 1 },
            { text: "经常依赖她们的支持和建议", score: 0 }
        ],
    },
    {
        question: "你有多少朋友愿意与你分享他们的秘密和感受？",
        chakra: "sacral",
        options: [
            { text: "很多朋友，彼此信任", score: 3 },
            { text: "几个亲密的朋友", score: 2 },
            { text: "很少有人愿意分享", score: 1 },
            { text: "朋友们总是找你倾诉，但你感到有压力", score: 0 }
        ],
    },
    {
        question: "当前的财务状况让你感到：",
        chakra: "sacral",
        options: [
            { text: "安全和满足，能够应对日常开销", score: 3 },
            { text: "偶尔有压力，但基本能应对", score: 2 },
            { text: "持续的财务困境，让你感到无助", score: 1 },
            { text: "经常担心，觉得钱不够用", score: 0 }
        ],
    },
    {
        question: "在家庭中，你的角色通常是：",
        chakra: "sacral",
        options: [
            { text: "积极参与家庭事务，提供支持", score: 3 },
            { text: "有时参与，但不总是", score: 2 },
            { text: "很少参与，感到疏离", score: 1 },
            { text: "承担大部分责任，感到压力大", score: 0 }
        ],
    },
    {
        question: "你与家人共度的时光通常是：",
        chakra: "sacral",
        options: [
            { text: "经常一起吃饭、聊天，享受家庭生活", score: 3 },
            { text: "偶尔一起活动，但不频繁", score: 2 },
            { text: "很少共度时光，关系疏远", score: 1 },
            { text: "大多数时间都在一起，有时觉得有点压抑", score: 0 }
        ],
    },
    {
        question: "当你的朋友计划一个聚会时，你的反应是：",
        chakra: "sacral",
        options: [
            { text: "感到兴奋，积极参与", score: 3 },
            { text: "有时参与，但看心情", score: 2 },
            { text: "经常找借口不参加", score: 1 },
            { text: "感到必须参加，尽管你有其他计划", score: 0 }
        ],
    },
    {
        question: "你是否愿意尝试新的兴趣爱好或活动？",
        chakra: "sacral",
        options: [
            { text: "经常尝试新事物，感到兴奋", score: 3 },
            { text: "偶尔尝试，但不常", score: 2 },
            { text: "很少尝试新事物，感到害怕或无趣", score: 1 },
            { text: "过于投入新活动，忽视其他责任", score: 0 }
        ],
    },
    {
        question: "当你遇到情感问题时，你通常会：",
        chakra: "sacral",
        options: [
            { text: "寻求朋友或家人的支持和建议", score: 3 },
            { text: "有时会倾诉，但主要自己处理", score: 2 },
            { text: "隐藏情感问题，不与他人分享", score: 1 },
            { text: "过度依赖他人的意见，难以独立解决", score: 0 }
        ],
    },
    {
        question: "在处理与伴侣的冲突时，你通常会：",
        chakra: "sacral",
        options: [
            { text: "理性沟通，寻找解决办法", score: 3 },
            { text: "有时回避冲突，难以面对", score: 2 },
            { text: "经常让步，避免争吵", score: 1 },
            { text: "情绪化反应，增加冲突", score: 0 }
        ],
    },
    {
        question: "你对未来的计划和目标是：",
        chakra: "sacral",
        options: [
            { text: "明确且有信心实现", score: 3 },
            { text: "有大致方向，但有时感到迷茫", score: 2 },
            { text: "缺乏明确目标，感到困惑", score: 1 },
            { text: "经常改变计划，难以坚持", score: 0 }
        ],
    },
    {
        question: "你在社交媒体上的表现如何：",
        chakra: "sacral",
        options: [
            { text: "积极参与，分享生活点滴", score: 3 },
            { text: "偶尔使用，保持联系", score: 2 },
            { text: "很少使用，感到无趣或压力", score: 1 },
            { text: "过度依赖社交媒体，花费大量时间", score: 0 }
        ],
    },
    {
        question: "当朋友需要帮助时，你通常会：",
        chakra: "sacral",
        options: [
            { text: "主动提供帮助，并感到乐意", score: 3 },
            { text: "有时提供帮助，但有时也会拒绝", score: 2 },
            { text: "感到无能为力，常常回避", score: 1 },
            { text: "总是答应帮助，甚至忽略自己的需求", score: 0 }
        ],
    },
    {
        question: "你在团队工作中的表现是：",
        chakra: "sacral",
        options: [
            { text: "积极参与，贡献创意和意见", score: 3 },
            { text: "有时参与，有时选择独自工作", score: 2 },
            { text: "难以与团队合作，偏好独自完成任务", score: 1 },
            { text: "依赖他人带领，自己较为被动", score: 0 }
        ],
    },
    {
        question: "当你需要在公众场合讲话时，你的反应是：",
        chakra: "sacral",
        options: [
            { text: "感到自信，能够清晰表达观点", score: 3 },
            { text: "有些紧张，但能够完成", score: 2 },
            { text: "感到极度害怕，尽量避免", score: 1 },
            { text: "过度紧张，难以表达完整思想", score: 0 }
        ],
    },
    {
        question: "在面对新的挑战或任务时，你的自信程度如何：",
        chakra: "sacral",
        options: [
            { text: "感到充满信心，相信自己能够成功", score: 3 },
            { text: "有些犹豫，但最终会尝试", score: 2 },
            { text: "感到害怕，尽量避免挑战", score: 1 },
            { text: "过度担心失败，导致行动迟缓", score: 0 }
        ],
    },
    // 太阳神经丛轮题目
    {
        question: "当你需要在团队中领导一个项目时，你的表现是：",
        chakra: "solarPlexus",
        options: [
            { text: "积极主动，能有效地组织和指挥团队", score: 3 },
            { text: "感到紧张，但还是尽力去领导", score: 2 },
            { text: "回避领导责任，感到无力", score: 1 },
            { text: "过于控制和支配他人，不接受不同意见", score: 0 }
        ],
    },
    {
        question: "在团队工作中，你的影响力如何，例如在团队讨论中，你通常是：",
        chakra: "solarPlexus",
        options: [
            { text: "其他成员尊重你的意见，愿意听取并采纳", score: 3 },
            { text: "偶尔能够影响团队，但不总是", score: 2 },
            { text: "缺乏影响力，团队成员不听你的意见", score: 1 },
            { text: "过于强势，导致团队成员感到压力", score: 0 }
        ],
    },
    {
        question: "在团队讨论中，你是否能让别人愿意听你讲话：",
        chakra: "solarPlexus",
        options: [
            { text: "其他成员乐于听取你的意见，并愿意合作", score: 3 },
            { text: "有时能吸引他人注意，但不总是", score: 2 },
            { text: "其他成员常忽视你的发言", score: 1 },
            { text: "过于强势，导致他人不愿听取", score: 0 }
        ],
    },
    {
        question: "在与同事或朋友讨论意见不一致的问题时，你的态度是：",
        chakra: "solarPlexus",
        options: [
            { text: "理性沟通，能够倾听并说服他人", score: 3 },
            { text: "有时感到不安，但愿意表达自己的意见", score: 2 },
            { text: "回避讨论，感到无所适从", score: 1 },
            { text: "过于坚持自己的观点，不愿妥协", score: 0 }
        ],
    },
    {
        question: "在表达自己的想法时，你的表现通常是：",
        chakra: "solarPlexus",
        options: [
            { text: "自信且清晰表达，能与他人有效沟通并说服他人", score: 3 },
            { text: "有时会感到紧张，但能进行基本交流和说服", score: 2 },
            { text: "感到害怕，不愿与他人交流和表达", score: 1 },
            { text: "过于强硬，总是试图主导对话", score: 0 }
        ],
    },
    {
        question: "你是否主动去挑战未知，例如尝试新活动或新任务：",
        chakra: "solarPlexus",
        options: [
            { text: "经常主动寻求新挑战，感到兴奋", score: 3 },
            { text: "偶尔会接受新挑战，但大多数时间感到犹豫", score: 2 },
            { text: "有时会尝试，但更多时候感到害怕", score: 1 },
            { text: "避免任何新的挑战，害怕未知", score: 0 }
        ],
    },
    {
        question: "当你需要做出重要决策时，你的表现是：",
        chakra: "solarPlexus",
        options: [
            { text: "能够果断决策，并承担责任", score: 3 },
            { text: "有时会感到犹豫，但最终会决定", score: 2 },
            { text: "感到困惑，难以做出决定", score: 1 },
            { text: "过度犹豫，难以做出决定", score: 0 }
        ],
    },
    {
        question: "你在工作或学习中是否能够坚持完成任务：",
        chakra: "solarPlexus",
        options: [
            { text: "能够坚持到底，完成所有任务", score: 3 },
            { text: "有时会拖延，但最终能完成任务", score: 2 },
            { text: "经常拖延，难以完成任务", score: 1 },
            { text: "过度工作，忽视休息和其他需求", score: 0 }
        ],
    },
    {
        question: "当你遇到失败时，你的反应是：",
        chakra: "solarPlexus",
        options: [
            { text: "能够从失败中学习，并继续前进", score: 3 },
            { text: "有时会感到失落，但能重新振作", score: 2 },
            { text: "感到沮丧，难以恢复自信", score: 1 },
            { text: "过度自责，难以接受失败", score: 0 }
        ],
    },
    {
        question: "在面对批评时，你的反应是：",
        chakra: "solarPlexus",
        options: [
            { text: "理性接受批评，并改进自己", score: 3 },
            { text: "有时会感到受伤，但能反思改进", score: 2 },
            { text: "感到挫败，难以接受和改进", score: 1 },
            { text: "过于防御，难以接受批评", score: 0 }
        ],
    },
    {
        question: "你对自己的自律性和时间管理感到：",
        chakra: "solarPlexus",
        options: [
            { text: "很自律，能够有效管理时间和任务", score: 3 },
            { text: "有时会松懈，但总体能管理", score: 2 },
            { text: "缺乏自律，时间管理差", score: 1 },
            { text: "过度追求完美，导致压力大", score: 0 }
        ],
    },
    {
        question: "你的情绪状态通常是：",
        chakra: "solarPlexus",
        options: [
            { text: "情绪稳定，能有效管理和表达", score: 3 },
            { text: "偶尔会情绪波动，但能调整", score: 2 },
            { text: "经常感到情绪低落，难以应对", score: 1 },
            { text: "情绪波动较大，难以控制", score: 0 }
        ],
    },
    {
        question: "你是否对自己的情绪感到困扰：",
        chakra: "solarPlexus",
        options: [
            { text: "很少感到情绪困扰，能很好地管理情绪", score: 3 },
            { text: "偶尔感到情绪困扰，但能调整", score: 2 },
            { text: "经常感到情绪困扰，并难以应对", score: 1 },
            { text: "经常感到情绪困扰，难以控制", score: 0 }
        ],
    },
    {
        question: "你是否容易被激怒，例如当有人打断你或质疑你的观点时：",
        chakra: "solarPlexus",
        options: [
            { text: "很少被激怒，能冷静应对", score: 3 },
            { text: "偶尔被激怒，但能迅速冷静下来", score: 2 },
            { text: "容易被激怒，并且难以平息", score: 1 },
            { text: "经常被激怒，难以控制情绪", score: 0 }
        ],
    },
    {
        question: "在面对他人需要帮助时，你的态度是：",
        chakra: "solarPlexus",
        options: [
            { text: "主动提供帮助，并感到乐意", score: 3 },
            { text: "有时提供帮助，但有时也会拒绝", score: 2 },
            { text: "避免帮助他人，感到无力", score: 1 },
            { text: "感到必须帮助，尽管自己有其他事情要做", score: 0 }
        ],
    },
    // 心轮题目
    {
        question: "当你的朋友在工作中遇到困难时，他向你寻求帮助，你通常会：",
        chakra: "heart",
        options: [
            { text: "主动提供实际建议和情感支持，帮助他渡过难关", score: 3 },
            { text: "提供一些建议，但感到不太愿意深入参与", score: 2 },
            { text: "尽量避免卷入，觉得自己帮不了什么忙", score: 1 },
            { text: "过度介入，试图完全掌控对方的情况", score: 0 }
        ],
    },
    {
        question: "你是否会在特殊的场合（如生日、节日）主动表达对家人或朋友的爱意：",
        chakra: "heart",
        options: [
            { text: "经常表达爱意，准备礼物或写卡片", score: 3 },
            { text: "偶尔表达，但觉得有些尴尬或不自然", score: 2 },
            { text: "很少表达，觉得不太必要", score: 1 },
            { text: "过度表现，可能让对方感到压力", score: 0 }
        ],
    },
    {
        question: "当家人或朋友提出与你不同的生活选择（如职业、恋爱对象）时，你的态度是：",
        chakra: "heart",
        options: [
            { text: "完全接纳并支持他们的决定，尊重他们的选择", score: 3 },
            { text: "有些不理解，但会努力去接受", score: 2 },
            { text: "感到困惑或不满，难以接受他们的选择", score: 1 },
            { text: "尝试说服他们改变选择，使其符合你的期望", score: 0 }
        ],
    },
    {
        question: "如果朋友无意中伤害了你的感情，你的反应是：",
        chakra: "heart",
        options: [
            { text: "理解并原谅他们，尝试沟通解决问题", score: 3 },
            { text: "感到受伤，但会尝试让时间治愈", score: 2 },
            { text: "很难原谅他们，可能会疏远这段关系", score: 1 },
            { text: "表面原谅，但内心保持怨恨", score: 0 }
        ],
    },
    {
        question: "当你照镜子时，是否能够欣赏自己的外貌和优点：",
        chakra: "heart",
        options: [
            { text: "经常对自己感到满意，接受自己的优点和缺点", score: 3 },
            { text: "偶尔感到满意，但有时对自己不太满意", score: 2 },
            { text: "经常对自己的外貌或优点感到不满", score: 1 },
            { text: "过度自恋，认为自己毫无缺点", score: 0 }
        ],
    },
    {
        question: "当你与家人发生冲突时，你的处理方式通常是：",
        chakra: "heart",
        options: [
            { text: "冷静沟通，努力找到双方都能接受的解决方案", score: 3 },
            { text: "感到有些紧张，但会尽力避免冲突升级", score: 2 },
            { text: "经常回避冲突，避免正面讨论问题", score: 1 },
            { text: "强烈反应，情绪化地应对冲突", score: 0 }
        ],
    },
    {
        question: "当朋友向你倾诉他们的烦恼时，你的表现是：",
        chakra: "heart",
        options: [
            { text: "很少有这样的担心，感到自信和信任", score: 3 },
            { text: "有时会感到害怕，但仍愿意分享", score: 2 },
            { text: "经常担心被拒绝或不被理解，因此保持沉默", score: 1 },
            { text: "过度担心，因此几乎不与他人分享情感", score: 0 }
        ],
    },
    // 喉轮题目
    {
        question: "当你在工作会议或团队讨论中表达意见时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "自信表达，清晰传达你的观点", score: 3 },
            { text: "感到紧张，但仍会尽力发表意见", score: 2 },
            { text: "通常保持沉默，担心被误解或批评", score: 1 },
            { text: "过度表达，打断他人或试图主导讨论", score: 0 }
        ],
    },
    {
        question: "你在与朋友或家人讨论问题时的表达方式通常被认为是：",
        chakra: "throat",
        options: [
            { text: "语气温和，能让人感到舒适和被尊重", score: 3 },
            { text: "有时表达不够明确，容易让人产生误解", score: 2 },
            { text: "经常被认为过于直接或严厉，容易引发紧张", score: 1 },
            { text: "得理不饶人，容易让人感到被压迫", score: 0 }
        ],
    },
    {
        question: "当你与他人发生分歧时，你的沟通方式通常是：",
        chakra: "throat",
        options: [
            { text: "理性且平和地表达自己的观点，倾听他人的意见", score: 3 },
            { text: "有时感到不安，但会尝试沟通", score: 2 },
            { text: "经常避免冲突，选择沉默或退让", score: 1 },
            { text: "强烈捍卫自己的观点，不愿妥协", score: 0 }
        ],
    },
    {
        question: "在社交场合（如聚会或活动）中，你是否能够自然地与陌生人交流：",
        chakra: "throat",
        options: [
            { text: "能够自然地与陌生人交流，轻松参与对话", score: 3 },
            { text: "感到有些紧张，但会尝试与他人交谈", score: 2 },
            { text: "经常感到不自在，避免与陌生人交流", score: 1 },
            { text: "过度表现，试图成为聚会的焦点", score: 0 }
        ],
    },
    {
        question: "当你需要表达自己的需求或感受时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "能够清晰且自信地表达自己的需求和感受", score: 3 },
            { text: "有时表达不清楚，但会尽力表达", score: 2 },
            { text: "经常感到害怕或犹豫，选择不表达", score: 1 },
            { text: "过度强调自己的需求，忽视他人的感受", score: 0 }
        ],
    },
    {
        question: "当你被误解时，你的反应通常是：",
        chakra: "throat",
        options: [
            { text: "冷静且理性地澄清误解，解释自己的立场", score: 3 },
            { text: "感到不安，但会尝试解释", score: 2 },
            { text: "通常选择沉默，避免进一步的冲突", score: 1 },
            { text: "过度反应，可能变得激动或防御", score: 0 }
        ],
    },
    {
        question: "当你听到朋友或同事说出不公正或错误的言论时，你的反应通常是：",
        chakra: "throat",
        options: [
            { text: "温和且理性地指出问题，并进行讨论", score: 3 },
            { text: "有些犹豫，但会尝试表达自己的不同看法", score: 2 },
            { text: "选择沉默，避免与朋友或同事发生冲突", score: 1 },
            { text: "过度激烈，可能引发争执或不快", score: 0 }
        ],
    },
    {
        question: "在与他人进行沟通时，你是否会倾向于使用：",
        chakra: "throat",
        options: [
            { text: "简明扼要且富有同理心的语言", score: 3 },
            { text: "有时表达不够清晰，但会尽量让对方理解", score: 2 },
            { text: "过于简短，可能显得冷淡或不关心", score: 1 },
            { text: "过于详细或复杂，让对方感到信息过量", score: 0 }
        ],
    },
    {
        question: "当你在公众场合（如演讲或报告）发言时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "自信且流利地表达，能够吸引听众的注意", score: 3 },
            { text: "感到紧张，但能够完成发言", score: 2 },
            { text: "经常感到恐惧，难以开口或表达不清", score: 1 },
            { text: "过度表现，可能显得夸张或不真实", score: 0 }
        ],
    },
    {
        question: "当你需要向他人提出建议或意见时，你的表达方式通常是：",
        chakra: "throat",
        options: [
            { text: "清晰且有建设性地表达，并考虑对方的感受", score: 3 },
            { text: "有时难以表达，但仍会尝试提出建议", score: 2 },
            { text: "通常避免提出建议，担心会引发不满", score: 1 },
            { text: "过度批评，容易让对方感到不悦", score: 0 }
        ],
    },
    {
        question: "当你在与家人讨论家庭决策（如假期安排）时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "清晰表达自己的意见，并愿意倾听他人的想法", score: 3 },
            { text: "感到有些紧张，但仍会参与讨论", score: 2 },
            { text: "经常选择保持沉默，担心影响他人的决定", score: 1 },
            { text: "过度坚持自己的意见，导致家庭冲突", score: 0 }
        ],
    },
    {
        question: "在与朋友分享经验或知识时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "感到自信，并能够清晰地分享自己的经验", score: 3 },
            { text: "有时感到紧张，但会尝试分享", score: 2 },
            { text: "通常感到不安，选择简短回应或回避", score: 1 },
            { text: "过度详细或频繁分享，可能让他人感到厌烦", score: 0 }
        ],
    },
    {
        question: "当你表达感激之情（如感谢同事的帮助）时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "诚恳且自然地表达感谢之情", score: 3 },
            { text: "感到有些不自然，但仍会表达", score: 2 },
            { text: "很少表达感谢，觉得不知如何开口", score: 1 },
            { text: "过度奉承，可能显得不真诚或让对方不适", score: 0 }
        ],
    },
    {
        question: "在日常沟通中，你的声音和语气通常被认为是：",
        chakra: "throat",
        options: [
            { text: "温和且富有同理心，让人感到舒适", score: 3 },
            { text: "有时缺乏情感或语气单调，但仍能传达信息", score: 2 },
            { text: "语气生硬或缺乏温度，让人感到不适", score: 1 },
            { text: "过于激动或咄咄逼人，可能让人感到压力", score: 0 }
        ],
    },
    {
        question: "当你需要为自己或他人争取权益时，你的表现通常是：",
        chakra: "throat",
        options: [
            { text: "自信且理性地表达立场，能够有效争取权益", score: 3 },
            { text: "感到不安，但会尝试表达并争取", score: 2 },
            { text: "经常感到犹豫或害怕，选择放弃争取", score: 1 },
            { text: "过度激烈地争取，可能导致对方反感或对立", score: 0 }
        ],
    },
    // 眉心轮题目
    {
        question: "当你闭上眼睛冥想时，你是否能够看到清晰的画面或图像？例如：你在冥想时是否会看到某种景象，比如风景、符号，或者某些人的面孔？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够看到生动的图像或画面，并从中获取信息", score: 3 },
            { text: "偶尔会看到一些模糊的图像，但不常发生", score: 2 },
            { text: "很少看到图像，冥想时更多的是一片黑暗", score: 1 },
            { text: "从未体验过任何画面或图像，只是单纯冥想", score: 0 }
        ],
    },
    {
        question: "当你与朋友或家人交流时，是否能够迅速理解他们未说出口的感受或想法？例如：在和朋友聊天时，你是否能感受到他们话语背后的情绪，比如他们表面上说没事，但你能感觉到他们其实有烦恼？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够理解对方的内心感受，甚至在未明言的情况下", score: 3 },
            { text: "偶尔能捕捉到对方未说出口的想法，但不总是", score: 2 },
            { text: "很难理解对方隐藏的情感或未表达的想法", score: 1 },
            { text: "从未关注过他人未说出口的感受或想法", score: 0 }
        ],
    },
    {
        question: "在日常生活中，当你需要做出突然的决策时，你是否会依赖直觉？例如：在面对突发情况（如决定是否要接受一个新工作机会）时，你是否会依赖直觉来做出决定，而不是完全依赖分析？",
        chakra: "thirdEye",
        options: [
            { text: "经常依赖直觉，并发现直觉非常准确", score: 3 },
            { text: "有时会依赖直觉，但主要依赖理性分析", score: 2 },
            { text: "很少依赖直觉，更多依赖外部信息和数据", score: 1 },
            { text: "完全不相信直觉，只依赖逻辑和事实", score: 0 }
        ],
    },
    {
        question: "当你在创作或解决问题时，是否经常有突然涌现的灵感？例如：在写作、画画或解决难题时，你是否曾有过灵感突然闪现的时刻，使得事情迎刃而解？",
        chakra: "thirdEye",
        options: [
            { text: "经常有灵感涌现，并且这些灵感非常有帮助", score: 3 },
            { text: "偶尔会有灵感，但不总是有用", score: 2 },
            { text: "很少有灵感，通常依赖刻意的思考和努力", score: 1 },
            { text: "从未有过灵感，所有创作或解决问题都是通过努力得来的", score: 0 }
        ],
    },
    {
        question: "在处理家庭事务或工作中的复杂问题时，你是否能够迅速看穿其表象，直达本质？例如：你在分析某个家庭问题或公司事务时，是否能迅速理解问题的核心，并找到切实的解决办法，而不是被表面现象所迷惑？",
        chakra: "thirdEye",
        options: [
            { text: "能够迅速理解事物的本质，并做出判断", score: 3 },
            { text: "需要一些时间才能看穿表象，理解本质", score: 2 },
            { text: "经常被事物的表象所迷惑，难以看清本质", score: 1 },
            { text: "完全依赖表面信息，几乎无法理解深层次的问题", score: 0 }
        ],
    },
    {
        question: "当你遇到某些特别的情况时，是否会有强烈的预感，仿佛已经知道会发生什么？例如：在某些场合（如即将遇见某人或发生某件事），你是否曾有过一种强烈的预感，并且这种预感最终被验证为准确？",
        chakra: "thirdEye",
        options: [
            { text: "经常有这种预感，并且发现它们常常是准确的", score: 3 },
            { text: "偶尔会有这种预感，但准确度不高", score: 2 },
            { text: "很少有预感，更多依赖事实和逻辑", score: 1 },
            { text: "从未有过预感，总是依赖眼前的现实情况", score: 0 }
        ],
    },
    {
        question: "当你早上醒来时，是否会从梦境中获得一些信息或解决方案？例如：你是否曾从梦境中获得过一些灵感或预示，帮助你解决了工作或生活中的问题？",
        chakra: "thirdEye",
        options: [
            { text: "经常会有这样的梦境，并且它们对现实生活有帮助", score: 3 },
            { text: "偶尔会从梦境中获得一些信息，但不常发生", score: 2 },
            { text: "很少记得自己的梦，梦境对我没有影响", score: 1 },
            { text: "从未从梦境中获得任何信息，梦对我来说毫无意义", score: 0 }
        ],
    },
    {
        question: "在面对复杂的工作任务或生活难题时，你的思维是否总是清晰而有逻辑？例如：当你在工作中需要处理大量信息时，是否能够迅速理清思路，制定有效的计划？",
        chakra: "thirdEye",
        options: [
            { text: "通常能够清晰、条理分明地分析问题，并找到解决方案", score: 3 },
            { text: "有时思维会有些混乱，但最终能够理清思路", score: 2 },
            { text: "经常感到思维混乱，难以有条理地思考", score: 1 },
            { text: "思维过于复杂，常常陷入细节而难以得出结论", score: 0 }
        ],
    },
    {
        question: "当你进入一个陌生的环境或遇到新的人时，你是否能够迅速感知到一种气氛或情感？例如：你走进一个房间或与新朋友见面时，是否能够立刻感知到氛围是轻松、紧张，还是敌对？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够迅速感知到环境或人的气氛", score: 3 },
            { text: "偶尔能感受到，但不总是准确", score: 2 },
            { text: "很少能感知到环境或人的气氛", score: 1 },
            { text: "对环境和人的情感完全不敏感", score: 0 }
        ],
    },
    {
        question: "当你在面对生活中的挑战时，你是否会进行深度的自我反思？例如：在经历失败或困惑时，你是否会花时间深刻思考原因，并从中汲取教训？",
        chakra: "thirdEye",
        options: [
            { text: "经常进行自我反思，并从中获得深刻的洞察", score: 3 },
            { text: "偶尔会反思，但不总是深入", score: 2 },
            { text: "很少进行自我反思，通常只关注外部情况", score: 1 },
            { text: "从不进行自我反思，完全专注于外部世界", score: 0 }
        ],
    },
    {
        question:  "当你闭上眼睛冥想时，你是否能够看到清晰的画面或图像？例如：你在冥想时是否会看到某种景象，比如风景、符号，或者某些人的面孔？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够看到生动的图像或画面，并从中获取信息", score: 3 },
            { text: "偶尔会看到一些模糊的图像，但不常发生", score: 2 },
            { text: "很少看到图像，冥想时更多的是一片黑暗", score: 1 },
            { text: "从未体验过任何画面或图像，只是单纯冥想", score: 0 }
        ],
    },
    {
        question: "当你与朋友或家人交流时，是否能够迅速理解他们未说出口的感受或想法？例如：在和朋友聊天时，你是否能感受到他们话语背后的情绪，比如他们表面上说没事，但你能感觉到他们其实有烦恼？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够理解对方的内心感受，甚至在未明言的情况下", score: 3 },
            { text: "偶尔能捕捉到对方未说出口的想法，但不总是", score: 2 },
            { text: "很难理解对方隐藏的情感或未表达的想法", score: 1 },
            { text: "从未关注过他人未说出口的感受或想法", score: 0 }
        ],
    },
    {
        question: "在日常生活中，当你需要做出突然的决策时，你是否会依赖直觉？例如：在面对突发情况（如决定是否要接受一个新工作机会）时，你是否会依赖直觉来做出决定，而不是完全依赖分析？",
        chakra: "thirdEye",
        options: [
            { text: "经常依赖直觉，并发现直觉非常准确", score: 3 },
            { text: "有时会依赖直觉，但主要依赖理性分析", score: 2 },
            { text: "很少依赖直觉，更多依赖外部信息和数据", score: 1 },
            { text: "完全不相信直觉，只依赖逻辑和事实", score: 0 }
        ],
    },
    {
        question: "当你在创作或解决问题时，是否经常有突然涌现的灵感？例如：在写作、画画或解决难题时，你是否曾有过灵感突然闪现的时刻，使得事情迎刃而解？",
        chakra: "thirdEye",
        options: [
            { text: "经常有灵感涌现，并且这些灵感非常有帮助", score: 3 },
            { text: "偶尔会有灵感，但不总是有用", score: 2 },
            { text: "很少有灵感，通常依赖刻意的思考和努力", score: 1 },
            { text: "从未有过灵感，所有创作或解决问题都是通过努力得来的", score: 0 }
        ],
    },
    {
        question: "在处理家庭事务或工作中的复杂问题时，你是否能够迅速看穿其表象，直达本质？例如：你在分析某个家庭问题或公司事务时，是否能迅速理解问题的核心，并找到切实的解决办法，而不是被表面现象所迷惑？",
        chakra: "thirdEye",
        options: [
            { text: "能够迅速理解事物的本质，并做出判断", score: 3 },
            { text: "需要一些时间才能看穿表象，理解本质", score: 2 },
            { text: "经常被事物的表象所迷惑，难以看清本质", score: 1 },
            { text: "完全依赖表面信息，几乎无法理解深层次的问题", score: 0 }
        ],
    },
    {
        question: "当你遇到某些特别的情况时，是否会有强烈的预感，仿佛已经知道会发生什么？例如：在某些场合（如即将遇见某人或发生某件事），你是否曾有过一种强烈的预感，并且这种预感最终被验证为准确？",
        chakra: "thirdEye",
        options: [
            { text: "经常有这种预感，并且发现它们常常是准确的", score: 3 },
            { text: "偶尔会有这种预感，但准确度不高", score: 2 },
            { text: "很少有预感，更多依赖事实和逻辑", score: 1 },
            { text: "从未有过预感，总是依赖眼前的现实情况", score: 0 }
        ],
    },
    {
        question: "当你早上醒来时，是否会从梦境中获得一些信息或解决方案？例如：你是否曾从梦境中获得过一些灵感或预示，帮助你解决了工作或生活中的问题？",
        chakra: "thirdEye",
        options: [
            { text: "经常会有这样的梦境，并且它们对现实生活有帮助", score: 3 },
            { text: "偶尔会从梦境中获得一些信息，但不常发生", score: 2 },
            { text: "很少记得自己的梦，梦境对我没有影响", score: 1 },
            { text: "从未从梦境中获得任何信息，梦对我来说毫无意义", score: 0 }
        ],
    },
    {
        question: "在面对复杂的工作任务或生活难题时，你的思维是否总是清晰而有逻辑？例如：当你在工作中需要处理大量信息时，是否能够迅速理清思路，制定有效的计划？",
        chakra: "thirdEye",
        options: [
            { text: "通常能够清晰、条理分明地分析问题，并找到解决方案", score: 3 },
            { text: "有时思维会有些混乱，但最终能够理清思路", score: 2 },
            { text: "经常感到思维混乱，难以有条理地思考", score: 1 },
            { text: "思维过于复杂，常常陷入细节而难以得出结论", score: 0 }
        ],
    },
    {
        question: "当你进入一个陌生的环境或遇到新的人时，你是否能够迅速感知到一种气氛或情感？例如：你走进一个房间或与新朋友见面时，是否能够立刻感知到氛围是轻松、紧张，还是敌对？",
        chakra: "thirdEye",
        options: [
            { text: "经常能够迅速感知到环境或人的气氛", score: 3 },
            { text: "偶尔能感受到，但不总是准确", score: 2 },
            { text: "很少能感知到环境或人的气氛", score: 1 },
            { text: "对环境和人的情感完全不敏感", score: 0 }
        ],
    },
    {
        question: "当你在面对生活中的挑战时，你是否会进行深度的自我反思？例如：在经历失败或困惑时，你是否会花时间深刻思考原因，并从中汲取教训？",
        chakra: "thirdEye",
        options: [
            { text: "经常进行自我反思，并从中获得深刻的洞察", score: 3 },
            { text: "偶尔会反思，但不总是深入", score: 2 },
            { text: "很少进行自我反思，通常只关注外部情况", score: 1 },
            { text: "从不进行自我反思，完全专注于外部世界", score: 0 }
        ],
    },
    // 顶轮题目
    {
        question: "在日常生活中，你是否常常感受到与宇宙或某种更高力量的连接？",
        chakra: "crown",
        options: [
            { text: "常常沉浸在与宇宙的深层连接中，觉得这是一种恒常的体验", score: 3 },
            { text: "经常感受到这种深层连接，并能同时保持对现实世界的关注", score: 2 },
            { text: "偶尔会有这样的体验，但更多时候专注于日常生活", score: 1 },
            { text: "主要关注现实生活，较少考虑与更高力量的连接", score: 0 }
        ],
    },
    {
        question: "当你面对困难或挑战时，你会如何依赖信仰或精神信念来获得支持？",
        chakra: "crown",
        options: [
            { text: "经常完全依赖信仰或精神信念，认为这足以帮助我应对任何情况", score: 3 },
            { text: "会依赖信仰或精神信念，但同时也考虑实际情况和理性判断", score: 2 },
            { text: "偶尔依赖信仰，但大多时候依赖自己的判断或他人的建议", score: 1 },
            { text: "通常更依赖现实和理性，较少诉诸信仰", score: 0 }
        ],
    },
    {
        question: "你会花多少时间思考生命的意义和你的存在目的？",
        chakra: "crown",
        options: [
            { text: "常常深入思考这些问题，觉得这是理解世界的关键", score: 3 },
            { text: "经常思考这些问题，同时还能兼顾日常责任", score: 2 },
            { text: "偶尔会进行一些反思，但不会影响到日常生活", score: 1 },
            { text: "更多专注于现实事务，很少进行深层次的反思", score: 0 }
        ],
    },
    {
        question: "在冥想、祷告或深思时，你是否能够感受到心灵的宁静与安宁？",
        chakra: "crown",
        options: [
            { text: "每次冥想或祷告都会深深地感受到内心的宁静，这种状态让我感到非常满足", score: 3 },
            { text: "经常感受到这种宁静，并能够将其融入日常生活", score: 2 },
            { text: "偶尔有这种体验，但不总是能达到平静的状态", score: 1 },
            { text: "较难在冥想或祷告中找到内心的宁静", score: 0 }
        ],
    },
    {
        question: "当你与他人交流时，你会倾向于从什么角度看待事物？",
        chakra: "crown",
        options: [
            { text: "通常会从灵性或哲学的角度出发，因为我觉得这是理解事情的最重要方面", score: 3 },
            { text: "经常从精神或灵性的角度出发，但也考虑现实情况", score: 2 },
            { text: "偶尔涉及这些话题，但大多数时间专注于现实问题", score: 1 },
            { text: "通常更关注实际情况，较少探讨精神或灵性层面", score: 0 }
        ],
    },
    {
        question: "你是否曾体验过无法解释的顿悟或灵感？",
        chakra: "crown",
        options: [
            { text: "经常体验到顿悟或灵感，我相信这些瞬间的洞见是最真实的感受", score: 3 },
            { text: "经常有这些体验，并能结合实际做出理性判断", score: 2 },
            { text: "偶尔会有这种体验，但大多依赖逻辑分析", score: 1 },
            { text: "较少有这些体验，通常依赖事实和数据", score: 0 }
        ],
    },
    {
        question: "当你处于自然环境中时，你会感受到怎样的内心状态？",
        chakra: "crown",
        options: [
            { text: "每次处在大自然中，我都感到一种深深的宁静和满足，觉得一切都很完美", score: 3 },
            { text: "感受到深层次的平和与满足，并能带入日常生活中", score: 2 },
            { text: "偶尔会有这种感觉，但更多关注环境的实际方面", score: 1 },
            { text: "较少感受到这种情绪，更专注于现实中的事物", score: 0 }
        ],
    },
    {
        question: "当别人对你提出意见或批评时，你通常如何回应？",
        chakra: "crown",
        options: [
            { text: "即使听到批评，我也能保持绝对的平静，觉得这些都不重要", score: 3 },
            { text: "能够保持平静，并理性地考虑他人的意见", score: 2 },
            { text: "有时会受到影响，但大多数时候保持冷静", score: 1 },
            { text: "经常情绪化反应，较难理性看待他人的意见", score: 0 }
        ],
    },
    {
        question: "在人际关系中，你如何对待爱与支持的付出？",
        chakra: "crown",
        options: [
            { text: "我总是无条件地给予爱与支持，因为我觉得这就是我应该做的", score: 3 },
            { text: "通常愿意无条件给予爱与支持，同时理解自己的需求", score: 2 },
            { text: "有时期待回报，但大多是出于真诚的爱心", score: 1 },
            { text: "经常希望通过付出得到认可或回报", score: 0 }
        ],
    },
    {
        question: "你对内在的神性或更高智慧有怎样的信任？",
        chakra: "crown",
        options: [
            { text: "我完全信任内在的神性或更高智慧，相信它们会带领我走向正确的道路", score: 3 },
            { text: "经常感到内在神性或更高智慧的指引，并结合现实情况判断", score: 2 },
            { text: "偶尔会有这种感受，但通常更依赖外部建议", score: 1 },
            { text: "较少感受到这种指引，更多依赖现实判断", score: 0 }
        ],
    },
    {
        question: "你是否经常感到生活中充满了意义和目的？",
        chakra: "crown",
        options: [
            { text: "我总是感到生活充满了意义和目的，这是我每天前进的动力", score: 3 },
            { text: "经常感到生活有意义，并能积极应对各种挑战", score: 2 },
            { text: "有时感到意义，但更多时候专注于实际问题", score: 1 },
            { text: "较少感受到生活的意义，更多感到迷茫", score: 0 }
        ],
    },
    {
        question: "在日常活动中，你是否会突然获得灵感或新想法？",
        chakra: "crown",
        options: [
            { text: "我经常在日常活动中获得灵感和新想法，这些时刻让我感到非常激动", score: 3 },
            { text: "经常在这些时刻获得灵感，并将其付诸实际", score: 2 },
            { text: "偶尔会有灵感，但大多专注于完成任务", score: 1 },
            { text: "很少有灵感，通常只关注当前任务", score: 0 }
        ],
    },
    {
    question: "你接触哲学或灵性内容时，会有怎样的感受？",
    chakra: "crown",
    options: [
        { text: "每次接触到哲学或灵性内容，我都感到深深的共鸣，觉得这些是我所追求的真理", score: 3 },
        { text: "经常感到共鸣，并将所学运用于生活中", score: 2 },
        { text: "偶尔感到共鸣，但大多只是接受信息", score: 1 },
        { text: "很少感到共鸣，通常不受这些内容影响", score: 0 }
    ],
},
{
    question: "独处时，你如何评价自己的内心状态？",
    chakra: "crown",
    options: [
        { text: "在独处时，我感到非常平静和满足，觉得这就是我内心最好的状态", score: 3 },
        { text: "感到内在平和，并能享受独处时的宁静", score: 2 },
        { text: "偶尔会感到平和，但有时需要外部刺激", score: 1 },
        { text: "较难在独处时找到平和，总需要外部娱乐", score: 0 }
    ],
},
{
    question: "当你讨论人生或未来时，倾向于如何引导对话？",
    chakra: "crown",
    options: [
        { text: "我常常会自然而然地将对话引向更深的哲学或灵性层面，因为我觉得这些话题非常重要", score: 3 },
        { text: "经常引导对话到精神或哲学层面，同时尊重实际关切", score: 2 },
        { text: "偶尔会引导对话到这些层面，但通常只谈实际问题", score: 1 },
        { text: "较少引导对话到这些层面，通常更关注现实问题", score: 0 }
        ],
    }
];


let currentQuestionIndex = 0;
let totalScore = {
    root: 0,
    sacral: 0,
    solarPlexus: 0,
    heart: 0,
    throat: 0,
    thirdEye: 0,
    crown: 0
};

const startPage = document.getElementById("start-page");
const questionPage = document.getElementById("question-page");
const resultPage = document.getElementById("result-page");
const startButton = document.getElementById("start-button");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options");
const resultDetails = document.getElementById("result-details");
const returnButton = document.getElementById("return-button");

startButton.addEventListener("click", startTest);
returnButton.addEventListener("click", restartTest);

function startTest() {
    startPage.classList.remove("active");
    questionPage.classList.add("active");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.addEventListener("click", () => handleAnswer(option.score, currentQuestion.chakra));
        optionsContainer.appendChild(button);
    });

    // 更新进度条
    updateProgressBar(currentQuestionIndex + 1, questions.length);
}

function
updateProgressBar(currentQuestionIndex, totalQuestions) {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function handleAnswer(score, chakra) {
    totalScore[chakra] += score;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionPage.classList.remove("active");
    resultPage.classList.add("active");
    resultDetails.innerHTML = "";

    for (const chakra in totalScore) {
        let summary = "";
        let crystalRecommendation = "";
        let chakraName = getChakraName(chakra);

        if (totalScore[chakra] > 35) {
            summary = `你的${chakraName}过于活跃，${getDetailedSummary(chakra, "overactive")}`;
            crystalRecommendation = getCrystalRecommendation(chakra, "overactive");
        } else if (totalScore[chakra] >= 25) {
            summary = `你的${chakraName}非常平衡稳定，${getDetailedSummary(chakra, "stable")}`;
            crystalRecommendation = getCrystalRecommendation(chakra, "stable");
        } else if (totalScore[chakra] >= 11) {
            summary = `你的${chakraName}较为薄弱不足，${getDetailedSummary(chakra, "weak")}`;
            crystalRecommendation = getCrystalRecommendation(chakra, "weak");
        } else {
            summary = `你的${chakraName}能量非常薄弱，${getDetailedSummary(chakra, "very_weak")}`;
            crystalRecommendation = getCrystalRecommendation(chakra, "very_weak");
        }
        // 计算数据条的宽度百分比
        const scorePercentage = (totalScore[chakra] / 45) * 100;

        // 在结果页面中加入数据条
        resultDetails.innerHTML += `
            <div class="chakra-summary ${chakra}-chakra">
                <div class="chakra-name">${chakraName}</div>
                <div class="summary-text">${summary}</div>
                <div class="crystal-recommendation">推荐水晶：${crystalRecommendation}</div>
                <div class="score-bar-container">
                    <div class="score-bar" style="width: ${scorePercentage}%;"></div>
                </div>
            </div>
        `;
    }
}

function getChakraName(chakra) {
    const names = {
        root: "海底轮",
        sacral: "脐轮",
        solarPlexus: "太阳神经丛轮",
        heart: "心轮",
        throat: "喉轮",
        thirdEye: "眉心轮",
        crown: "顶轮"
    };
    return names[chakra];
}

function getDetailedSummary(chakra, state) {
    const summaries = {
        root: {
            overactive: "你可能表现得非常强势，控制欲强，容易用力过猛，总想支配他人，难以放松，过度追求目标，忽视其他的人的感受。",
            stable: "你在面对挑战时自信且踏实，能够有效应对压力，有激情和活力并保持内心的安全感与稳定，会合理分配时间和资源。",
            weak: "偶尔感到不安和缺乏安全感，但整体还能应对生活挑战。时常感觉需要更多的支持来增强稳定性，特别是在压力下有无力感。",
            very_weak: "常感焦虑和恐惧，缺乏自信，面对压力时感到无力和困惑。总是很累没有生机，无法有效的行动，无法独自完成事情，很想要外界支持与帮助。"
        },
        sacral: {
            overactive: "情绪波动剧烈，控制欲强，容易在情感和人际关系中表现出占有欲，不在意别人的感受。在关系中要求颇多，偏向追求感官享受和自我为中心，忽略长远情感发展。",
            stable: "你情感自然流露，人际关系良好，为人主动，能与他人建立健康关系的同时保持界限和自律，在情感与理性之间找到良好平衡。",
            weak: "表达拘谨，偶尔感到孤独和不安，不喜欢与外界打交道。没有太多情感连接，特别是在处理比较亲近的关系时。",
            very_weak: "下意识的逃避，感到孤立和隔绝，让人无法靠近。反感与外界交流，面对情感和挑战时无力。"
        },
        solarPlexus: {
            overactive: "自信甚至自负，容易愤怒，倾向于控制和支配他人，竞争性强，难以妥协，忽略他人感受，常显得过于强势。",
            stable: "你表现得自信且理性，能够有效地领导和解决冲突，在情绪管理上成熟，并尊重他人的感受和意见。",
            weak: "缺乏自信，偶尔表现得拘谨或犹豫不决，难以在关键时刻做出决定。你需要更多鼓励和支持增强自信心。",
            very_weak: "自我价值感低，感到无力和压抑，经常感到委屈，面对问题喜欢回避责任和决策，犹豫不决，缺乏行动力。面对挑战时显得脆弱，容易被人拿捏。"
        },
        heart: {
            overactive: "情感表达过于强烈，容易过度关爱他人的问题，多管闲事，难以设定健康的界限，过度强烈的付出可能会导致情感的失衡。",
            stable: "自然地给予和接受爱，能建立健康关系，设定适当情感界限，情感上稳定且宽容，既能共情也能自我关怀。",
            weak: "情感表达拘谨，略微自闭，偶尔感到孤立或距离感。很少主动帮助别人或者表达自己的需求。偶尔有一些抑郁之气。",
            very_weak: "情感封闭，觉得自己不被爱，难以建立有意义关系，缺乏爱与同情。需进行情感疗愈，重新连接内在世界，打开心轮。"
        },
        throat: {
            overactive: "沟通时表现得过于强势或者话太多，容易打断他人，主导对话，忽略他人感受，难以平衡交流，导致沟通不顺畅。",
            stable: "能够自信且清晰地表达想法，尊重他人意见，在沟通中表现得有力量且有建设性，能够有效传达信息并倾听反馈。",
            weak: "表达拘谨不流畅，难以清晰传达想法和需求或者表达错误。表达不太自信，需更多练习和支持增强沟通能力。",
            very_weak: "沟通中感到不安和害怕，不愿表达或者交流，难以表达自我，感到孤立无助。沟通有比较明显的障碍。"
        },
        thirdEye: {
            overactive: "精神活动过于活跃紧绷，容易陷入幻想或思维混乱，容易假想太多，疑心重，可能脱离实际生活。",
            stable: "直觉敏锐，洞察力强，意识和思想清晰稳定，能够有效理解复杂概念，并在日常生活中做出明智的决策。",
            weak: "直觉和洞察力稍有欠缺，偶尔思维不清晰，容易犯迷糊。理解力欠缺，对新事物的学习能力不足。",
            very_weak: "精神与意识层面迟钝和封闭，缺乏直觉和洞察力，难以理解抽象理念，依赖他人的声音，没有想法。脑子容易稀里糊涂的，反应迟钝。"
        },
        crown: {
            overactive: "过度专注灵性领域，忽略现实生活需求，沉迷于哲学或灵性思考，难以平衡精神追求与现实生活，与现实脱节。",
            stable: "灵性与现实平衡，既能深刻思考生命意义，又能务实面对生活，也能在生活中保持稳定的灵性成长与内在智慧连接。",
            weak: "灵性意识欠缺，对灵性与哲学没有太多想法，得过且过，对更高智慧和感知生命意义、内在成长不感兴趣。",
            very_weak: "时常比较固执、唯物主义，只在乎感官感受，精神和灵性层面封闭，难以感知更高智慧，缺乏生命意义方向。"
        }
    };
    return summaries[chakra][state];
}

function getCrystalRecommendation(chakra, state) {
    const recommendations = {
        root: {
            overactive: "黑曜石、茶色水晶、黑碧玺",
            stable: "红玛瑙、红兔毛、茶色水晶",
            weak: "红玛瑙、红兔毛、石榴石",
            very_weak: "血石、石榴石、红玛瑙"
        },
        sacral: {
            overactive: "黑曜石、海蓝宝、蓝纹玛瑙",
            stable: "橙色方解石、黄水晶、月光石",
            weak: "血石、黄水晶、黄铁矿",
            very_weak: "虎眼石、红纹石、红玛瑙"
        },
        solarPlexus: {
            overactive: "蓝纹玛瑙、海蓝宝、黑曜石",
            stable: "虎眼石、黄水晶、琥珀蜜蜡",
            weak: "黄水晶、黄铁矿、太阳石",
            very_weak: "虎眼石、利比亚黄金陨石、黄金"
        },
        heart: {
            overactive: "蓝纹玛瑙、赤铁矿、黑曜石",
            stable: "绿色碧玺、翡翠、孔雀石",
            weak: "粉晶、绿松石、孔雀石",
            very_weak: "粉晶、捷克陨石、西瓜碧玺"
        },
        throat: {
            overactive: "海蓝宝、蓝纹玛瑙、赤铁矿",
            stable: "海蓝宝、蓝纹玛瑙、青金石",
            weak: "海蓝宝、蓝晶石、青金石",
            very_weak: "蓝托帕石、海蓝宝、蓝宝石"
        },
        thirdEye: {
            overactive: "紫水晶、黑曜石、海蓝宝",
            stable: "紫水晶、紫龙晶、紫锂辉",
            weak: "紫水晶、超七水晶、拉长石",
            very_weak: "紫水晶、超七水晶、鱼眼石"
        },
        crown: {
            overactive: "黄铁矿、茶色水晶、黑碧玺",
            stable: "白水晶、透石膏、紫水晶",
            weak: "白水晶、超七水晶、鱼眼石",
            very_weak: "白水晶、紫水晶、捷克陨石"
        }
    };
    return recommendations[chakra][state];
}

function restartTest() {
    // 重置当前问题索引
    currentQuestionIndex = 0;

    // 重置每个脉轮的总分
    totalScore = {
        root: 0,
        sacral: 0,
        solarPlexus: 0,
        heart: 0,
        throat: 0,
        thirdEye: 0,
        crown: 0
    };

    // 清空结果页面的内容
    resultDetails.innerHTML = "";

    // 隐藏结果页面并显示开始页面
    resultPage.classList.remove("active");
    startPage.classList.add("active");
}