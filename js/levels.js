var levels = [
  {
    helpTitle : "根据类型(type)来选择元素(element)",
    selectorName : "类型选择器(Type Selector)",
    doThis : "选中这些“盘子”(plate)",
    selector : "plate",
    syntax : "A",
    help : "选中所有类型为 <strong>A</strong> 的元素。这里的“类型”即指标签(tag)的类型，也就是说， <tag>div</tag> 、 <tag>p</tag> 和 <tag>ul</tag> 都是不同的元素类型。",
    examples : [
      '<strong>div</strong> 选择所有的 <tag>div</tag> 元素。',
      '<strong>p</strong> 选择所有的 <tag>p</tag> 元素。',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "选中这些“便当盒”(bento box)",
    selector : "bento",
    syntax : "A",
    helpTitle : "根据类型来选择元素",
    selectorName : "类型选择器",
    help : "选中所有类型为 <strong>A</strong> 的元素。这里的“类型”即指标签的类型，也就是说， <tag>div</tag> 、 <tag>p</tag> 和 <tag>ul</tag> 都是不同的元素类型。",
    examples : [
      '<strong>div</strong> 选择所有的 <tag>div</tag> 元素。',
      '<strong>p</strong> 选择所有的 <tag>p</tag> 元素。',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "选中那个“花边盘子”(fancy plate)",
    selector : "#fancy",
    selectorName: "ID 选择器(ID Selector)",
    helpTitle: "根据元素的 ID 选择元素",
    syntax: "#id",
    help : '通过指定的<strong>id</strong>来选择元素，你也可以将它和类型选择器结合起来使用。',
    examples : [
      '<strong>#cool</strong> 选择具有这样属性的元素： <strong>id="cool"</strong> 。',
      '<strong>ul#long</strong> 选择 <tag>ul id="long"</tag> 。'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "选择一个在另一个元素之中的元素",
    selectorName : "后代选择器(Descendant Selector)",
    doThis : "选中“盘子”(plate)里的那个“苹果”(apple)",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "选中所有 <strong>A</strong> 元素之中的 <strong>B</strong> 元素。<strong>B</strong> 在另一个元素之中，所以我们把它叫做“后代(descendant)”。",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> 选择所有 <tag>p</tag> 元素之中的 <tag>strong</tag> 元素。',
      '<strong>#fancy&nbsp;&nbsp;span</strong> 选择 <strong>id="fancy"</strong> 之中的所有 <tag>span</tag> 元素。',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "选中“花边盘子”(fancy plate)里的那块“酸黄瓜”(pickle)",
    selector : "#fancy pickle",
    helpTitle: "结合后代选择器和 ID 选择器",
    syntax: "#id&nbsp;&nbsp;A",
    help : '后代选择器可以用来结合任意选择器。',
    examples : [
      '<strong>#cool&nbsp;span</strong> 选择具有 <strong>id="cool"</strong> 这个属性的元素中的所有 <tag>span</tag> 元素。'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "选中那些“小”(small)“苹果”(apple)",
    selector : ".small",
    selectorName: "类选择器(Class Selector)",
    helpTitle: "根据元素的类(class)来选择元素",
    syntax: ".classname",
    help : '类选择器可以选中具有相应类的所有元素，每个元素只能有一个 ID ，但可以有多个类。',
    examples : [
    '<strong>.neato</strong> 选择所有具有这样属性的元素： <strong>class="neato"</strong> 。'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "选中那些“小”(small)“橘子”(orange)",
    selector : "orange.small",
    helpTitle: "结合类选择器",
    syntax: "A.className",
    help : '你可以将类选择器与其他选择器（如类型选择器）结合。',
    examples : [
      '<strong>ul.important</strong> 选择所有具有这样属性的 <tag>ul</tag> 元素： <strong>class="important"</strong> 。',
      '<strong>#big.wide</strong> 选择同时具有 <strong>id="big"</strong> 和 <strong>class="wide"</strong> 这两个属性的元素。'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "选中那些“便当”(bento)里的“小”(small)“橘子”(orange)",
    selector : "bento orange.small",
    syntax: "好好想想，加油！",
    helpTitle: "你可以的……",
    help : '结合你之前这些关学到的知识干掉它！',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "选中所有的“盘子”(plate)和便当(bento)",
    selector : "plate,bento",
    selectorName : "逗号结合器(Comma Combinator)",
    helpTitle: "用逗号……把选择器……结合起来！",
    syntax : "A, B",
    help : '多亏了 Shatner 的黑科技，这个选择器可以选中所有的 <strong>A</strong> 元素和 <strong>B</strong> 元素。你可以用这种办法结合任意的选择器，两个以上也是可以的。',
    examples: [
    '<strong>p, .fun</strong> 选择所有的 <tag>p</tag> 元素以及所有这样的元素： <strong>class="fun"</strong> 。',
    '<strong>a, p, div</strong> 选择所有的 <tag>a</tag> 、 <tag>p</tag> 和 <tag>div</tag> 元素。'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "选中所有的东西！",
    selector : "*",
    selectorName:  "全局选择器(The Universal Selector)",
    helpTitle: "选中所有的元素！",
    syntax : "*",
    help : '你可以用全局选择器选择所有的元素！',
    examples : [
      '<strong>p *</strong> 选择 <tag>p</tag> 元素中的所有元素。',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "选中“盘子”(plate)中的所有东西",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "结合全局选择器",
    help : '这个选择器可以选择 <strong>A</strong> 元素中的所有元素。',
    examples : [
      '<strong>p *</strong> 选择所有 <tag>p</tag> 中的每个元素。',
      '<strong>ul.fancy *</strong> 选择所有 <tag>ul class="fancy"</tag> 中的每个元素。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "选中所有紧随“盘子”(plate)之后“苹果”(apple)",
    selector : "plate + apple",
    helpTitle: "选择紧随某元素之后的元素",
    selectorName: "相邻兄弟选择器(Adjacent Sibling Selector)",
    syntax : "A + B",
    help : "这个选择器选择所有紧随 <strong>A</strong> 之后的 <strong>B</strong> 元素。彼此紧靠的元素互为兄弟(sibling)，它们的层级（或在 DOM 树中的深度）是相同的。 <br/><br/>在这个关卡的 HTML 标记中，缩进层级相同的元素互为兄弟元素。",
    examples : [
      '<strong>p + .intro</strong> 选择所有紧随 <tag>p</tag> 元素之后的，并且具有 <strong>class="intro"</strong> 这个属性的元素。',
      '<strong>div + a</strong> 选择所有紧随 <tag>div</tag> 元素之后的 <tag>a</tag> 元素。'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "通用兄弟选择器(General Sibling Selector)",
    helpTitle: "选择跟在其它元素之后的元素",
    syntax: "A ~ B",
    doThis : "选择“便当”(bento)后面的“酸黄瓜”(pickle)",
    selector : "bento ~ pickle",
    help : "你可以选择所有跟随在一个元素之后的所有的兄弟元素。这和相邻兄弟选择器 (A + B) 类似，但是它获取的是随后的所有元素，而不仅仅是只获取一个。",
    examples : [
      '<strong>A ~ B</strong> 选择所有在 <strong>A</strong> 后面的 <strong>B</strong>。'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "子选择器(Child Selector)",
    syntax: "A > B",
    doThis : "选择直接放在“盘子”(plate)上的“苹果”(apple)",
    selector : "plate > apple",
    helpTitle: "选择元素的直接子元素",
    help : "你可以选择别的元素的直接子元素。子元素(child element)是直接嵌套(nest)于别的元素下一级的元素。<br><br>比这个嵌套得更深的元素被称为“后代元素(descendant elements)”。",
    examples : [
      '<strong>A > B</strong> 选择所有父元素为 <strong>A</strong> 的 <strong>B</strong>'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "伪元素选择器：第一个子元素(First Child Pseudo-selector)",
    helpTitle: "选择在某个元素之内的第一个子元素",
    doThis : "选中“最上面的”(top)“橘子”(orange)",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "你可以用这个选择第一个子元素。所谓子元素(Child element)，就是直接嵌套于另一个元素的元素。你可以把伪元素选择器(Pseudo-selector)和其他选择器结合起来使用。",
    examples : [
      '<strong>:first-child</strong> 选择所有第一个的子元素。',
      '<strong>p:first-child</strong> 选择所有 <tag>p</tag> 标签的第一个子元素。',
      '<strong>div p:first-child</strong> 选择所有 <tag>div</tag> 标签的子元素中第一个 <tag>p</tag> 元素。'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "伪元素选择器：唯一子元素(Only Child Pseudo-selector)",
    helpTitle: "选择这样的元素：它（们）是另外一个元素中的唯一一个元素",
    doThis : "选中盘子(plate)中的苹果(apple)和酸黄瓜(pickle)",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "你可以选择这样的元素：它（们）是另外一个元素中的唯一一个元素。",
    examples : [
      '<strong>span:only-child</strong> 选择那些在另外一些元素中唯一的 <tag>span</tag> 元素。',
      '<strong>ul li:only-child</strong> 选择那些在 <tag>ul</tag> 元素中唯一的 <tag>li</tag> 元素。'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "伪元素选择器：最后一个子元素(Last Child Pseudo-selector)",
    helpTitle: "选中这样一些元素：它（们）是另一个元素中的最后一个子元素",
    doThis : "选中“小的”(small)“苹果”(apple)和“酸黄瓜”(pickle)",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "你可以选择这样的元素：它（们）是另一个元素中的最后一个子元素 <br><br>提示 &rarr; 在那些只有一个元素的情况下，你把这个元素看作是第一个元素(first-child)、(only-child) 或是 (last-child) 都是可以的！",
    examples : [
      '<strong>:last-child</strong> 选择所有作为最后一个子元素出现的元素。',
      '<strong>span:last-child</strong> 选择所有元素中的最后一个 <tag>span</tag> 元素。',
      '<strong>ul li:last-child</strong> 选择所有 <tag>ul</tag> 元素中的最后一个 <tag>li</tag> 元素。'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "伪元素选择器：第 N 个 元素(Nth Child Pseudo-selector)",
    helpTitle: "通过元素在其父元素中的顺序来选择元素。",
    doThis : "选中第三个“盘子”(plate)",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "选中在另一元素中的第 n 个 (<strong>nth</strong>) (如: 第一个(1st), 第三个(3rd), 第十二个(12th) 等) 元素。",
    examples : [
      '<strong>:nth-child(8)</strong> 选中每个元素中的第八个元素。',
      '<strong>div p:nth-child(2)</strong> 选中每个 <strong>div</strong> 中的第二个 <strong>p</strong> 元素。',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "倒数第 N 个元素选择器(Nth Last Child Selector)",
    helpTitle: "根据元素在其父元素中倒数的顺序来选择元素。",
    doThis : "选中第一个便当(bento)",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "从下往上选择子元素，这与 nth-child 很类似，但请注意是倒数！",
    examples : [
      '<strong>:nth-last-child(2)</strong> 选择倒数第二个子元素。'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "“第一个某类”选择器(First of Type Selector)",
    helpTitle: "选择第一个出现的某种类型的元素",
    doThis : "选中第一个“苹果”(apple)",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "选择其他元素中的第一个某种元素。",
    examples : [
      '<strong>span:first-of-type</strong> 选择任意元素中的第一个 <tag>span</tag> 元素。'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "“第 N 个某类”选择器(Nth of Type Selector)",
    doThis: "选中所有第偶数个的盘子(plate)",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "选中某元素中的某个特定位置的子元素，或第奇/偶数个某种管苏",
    examples: [
      '<strong>div:nth-of-type(2)</strong> 选中第二个 div 实例。',
      '<strong>.example:nth-of-type(odd)</strong> 选中含有“example”类的第偶数个元素。'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "带公式的“第 N 个某类”选择器(Nth-of-type Selector with Formula)",
    doThis: "从第三个盘子(plate)开始，选中每隔一个的盘子",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "这里的 nth-of-type 公式的意思是，从第 B 个某元素开始，选择每隔 (A-1) 个此元素。",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> 从第 6 个 <tag>span</tag> 开始，每隔一个该元素就选中一个'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "类型选择器（Only of Type Selector）",
    helpTitle: "选择的父元素内是否只有唯一的子元素",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "选择在盘子(plate)中只有一个苹果(apple)",
    help : "选择的元素中子元素是否唯一。",
    examples : [
      '<strong>p span:only-of-type</strong> 查找<tag>span</tag> 在任何 <tag>p</tag> 如果它是唯一的 <tag>span</tag> 在那里.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "最终类型选择器（Last of Type Selector）",
    helpTitle: "查找该类型元素的最后一个",
    doThis : "查找着后一个苹果(apple)和橘子(orange)",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "查找该类型元素的最后一个.记得一个类型是一个标签(tag),所以 <tag>p</tag> 和 <tag>span</tag> 是不同类型. <br><br>我知道这如果它是这个类型的最后一个那么它将会被选中.",
    examples : [
      '<strong>div:last-of-type</strong>选择最后一个 <tag>div</tag> 中的元素.',
      '<strong>p span:last-of-type</strong> 选择最后一个 <tag>span</tag> 中的每一个 <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "空选择器（Empty Selector）",
    helpTitle: "查找所有没有孩子的元素",
    doThis : "查找全部孩子为空的便当(bento)",
    selector : "bento:empty",
    syntax: ":empty",
    help : "查找所有元素里面没有任何其他元素在内.",
    examples : [
      '<strong>div:empty</strong> 查找所有内部为空 <tag>div</tag> 元素.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "否定伪类选择器(Negation Pseudo-class)",
    helpTitle: "选择所有否定的不匹配选择器的元素",
    doThis : "查找所有大苹果(apple)",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : '你可以使用这个去查找所有元素中不匹配的选择器<strong>"X"</strong>.',
    examples : [
      '<strong>:not(#fancy)</strong> 查找所有元素没有<strong>id="fancy"</strong>的属性.',
      '<strong>div:not(:first-child)</strong> 选择每一个div <tag>div</tag> 排除掉不是第一个子元素（first child）.',
      '<strong>:not(.big, .medium)</strong> 查找所有元素class中没有<strong>class="big"</strong> 或者 <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "属性选择器（Attribute Selector）",
    helpTitle: "查找所有元素是否有特定属性名",
    doThis : "查找所有属性名为 for 的物品",
    selector : "[for]",
    syntax: "[attribute]",
    help : '属性是出现在元素(element)中的一个标签(tag),就像这样:<tag>span attribute="value"</tag>.并不总是一个属性有一个值,它可以是空白!',
    examples : [
      '<strong>a[href]</strong> 查找所有 <tag>a</tag> 标签元素它有一个 <strong>href="anything"</strong> 的属性值.',
      '<strong>[type]</strong> 查找所有元素它有一个 <strong>type="anything"</strong>的属性.'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "属性选择器(Attribute Selector)",
    helpTitle: "查找所有元素是否有特定属性名",
    doThis : "查找所有盘子(plate)是否有 for 属性名",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "结合元素名字和属性的名字(就像标签名选择器(tag name selector))加入到它的最后.",
    examples : [
      '<strong>[value]</strong> 查找所有元素有一个 <strong>value="anything"</strong> 的属性.',
      '<strong>a[href]</strong> 查找所有 <tag>a</tag> 标签元素它有一个 <strong>href="anything"</strong> 的属性.',
      '<strong>input[disabled]</strong> 查找所有 <tag>input</tag>标签是否有 <strong>disabled</strong> 属性'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "属性值选择器(Attribute Value Selector)",
    helpTitle: "选择所有元素属性值相等的元素Select all elements that have a specific attribute value",
    doThis : "查找所有Vitaly的食品Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "属性选择器是一个大小写敏感, 内容完全匹配的选择器.",
    examples : [
      '<strong>input[type="checkbox"]</strong> 查找所有输入(input)为复选框(checkbox)的元素.'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "属性起始选择器(Attribute Starts With Selector)",
    helpTitle: "查找所有对应元素中的属性值的开始是否包含特定字符的元素",
    doThis : "查找元素中for属性名内容起始为'Sa'的元素",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> 选择所有元素 class为 <strong>toy</strong> 和它的属性 <strong>category="Swimwear</strong> 或者 <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "属性结尾选择器(Attribute Ends With Selector)",
    helpTitle: "查找所有对应元素中的属性值的结尾是否包含特定字符的元素",
    doThis : "查找元素中for属性名内容结尾为'ato'的元素",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> 显示查找所有图片中结尾为  <strong>.jpg</strong> 的图片.',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "属性通配符选择器(Attribute Wildcard Selector)",
    helpTitle: "查找所有对应元素中的属性值是否包含特定字符的元素",
    syntax: '[attribute*="value"]',
    doThis : "查找所有元素和属性名内容中包含'obb'字符",
    selector : '[for*="obb"]',
    help : '如果属性选择器中有attribute*它能够去识别像 <strong>class</strong>, <strong>href</strong> 或者 <strong>src</strong> 的属性.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> 查找所有的img元素显示图片路径的来自"thumbnails"的文件.',
      '<strong>[class*="heading"]</strong> 查找所有元素中class值为为"heading",像 <strong>class="main-heading"</strong> 和 <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
