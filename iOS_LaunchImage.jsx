//see https://www.adobe.com/devnet/photoshop/scripting.html
//see www.adobe.io

var bigIcon = File.openDialog("请选择一张较大尺寸的原始启动页图片：", "*.png", false);

var pngDoc = open(bigIcon, OpenDocumentType.PNG);

var destFolder = Folder.selectDialog( "请选择一个输出的文件夹：");

var icons = 
[
  {"name": "4S_640_960","width":UnitValue(640, "px"),"height":UnitValue(960, "px")},
  {"name": "5_5S_640_1136","width":UnitValue(640, "px"),"height":UnitValue(1136, "px")},
  {"name": "6S_7_8_750_1334","width":UnitValue(750, "px"),"height":UnitValue(1334, "px")},
  {"name": "6S_7_8_Plus_1242_2208","width":UnitValue(1242, "px"),"height":UnitValue(2208, "px")},
  {"name": "X_XS_1125_2436","width":UnitValue(1125, "px"),"height":UnitValue(2436, "px")},
  {"name": "XR_828_1792","width":UnitValue(828, "px"),"height":UnitValue(1792, "px")},
  {"name": "XS_MAX_1242_2688","width":UnitValue(1242, "px"),"height":UnitValue(2688, "px")},

  // {"name": "Portrait_iPad_79_97_1536_2048","width":UnitValue(1536, "px"),"height":UnitValue(2048, "px")},
  // {"name": "Portrait_iPad_105_1668_2224","width":UnitValue(1668, "px"),"height":UnitValue(2224, "px")},
  // {"name": "Portrait_iPad_11_1668_2388","width":UnitValue(1668, "px"),"height":UnitValue(2388, "px")},
  // {"name": "Portrait_iPad_129_2048_2732","width":UnitValue(2048, "px"),"height":UnitValue(2732, "px")}
];

//定义一个变量[option]，表示iOS输出的格式为PNG。并设置输出PNG时不执行PNG8压缩，以保证图标质量。
var option = new PNGSaveOptions();

//保存当前的历史状态，以方便缩放图片后，再返回至最初状态的尺寸。
option.PNG8 = false;
var startState = pngDoc.historyStates[0];

for (var i = 0; i < icons.length; i++) 
{
	var icon = icons[i];

    //定义一个变量[anchor]，用来表示画布调整时的参考锚点。这里设置以画布的中心点为锚点。
    var anchor = AnchorPosition.MIDDLECENTER;
    
    var precentOfWidth = icon.width / pngDoc.width * 100.0;
    var precentOfHeight = icon.height / pngDoc.height * 100.0;
    
    //按设计师要求，采用类原生 fit 模式
    var percentAspectFit = (precentOfHeight < precentOfWidth)?precentOfHeight:precentOfWidth;
    
    //重新设置画布大小。
    pngDoc.resizeCanvas(icon.width, icon.height, anchor);
    
    //重设图层大小
    pngDoc.activeLayer.resize(percentAspectFit, percentAspectFit, anchor);
    
	//图标名称
	var destFileName = icon.name + ".png";
    
	//输出路径
	var file = new File(destFolder + "/" + destFileName);

	//图标导出
	pngDoc.saveAs(file, option, true, Extension.LOWERCASE);

	//将[doc]对象的历史状态，恢复到尺寸缩放之前的状态
	pngDoc.activeHistoryState = startState;
}

//操作完成后，关闭文档。
pngDoc.close(SaveOptions.DONOTSAVECHANGES);