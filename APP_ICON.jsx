//see https://www.adobe.com/devnet/photoshop/scripting.html
//see www.adobe.io
//调用[File]的[openDialog]命令，弹出文件选择窗口，提示用户选择1024*1024尺寸的图标，并将文件存储在变量[bigIcon]中。
var bigIcon = File.openDialog("请选择一张 1024x1024 大小, 无 alpha 通道的 png 图片：", "*.png", false);

//打开用户选择的图标文件，并将打开后的文档，赋予变量[pngDoc]。
var pngDoc = open(bigIcon, OpenDocumentType.PNG);

//调用[Folder]的[selectDialog]命令，弹出文件夹选择窗口，提示用户选择输出iOS图标的文件夹。
//并将文件夹存储在变量[destFolder]中。
var destFolder = Folder.selectDialog( "请选择一个输出的文件夹：");

//定义一个数组，这个数组由各种js对象组成，每个对象都有一个[name]属性和[size]属性，分别表示图标的名称的尺寸。
var icons = 
[
  {"name": "20","size":UnitValue(20, "px")},
  {"name": "29","size":UnitValue(29, "px")},
  {"name": "40","size":UnitValue(40, "px")},
  {"name": "58","size":UnitValue(58, "px")},
  {"name": "60","size":UnitValue(60, "px")},
  {"name": "76","size":UnitValue(76, "px")},
  {"name": "80","size":UnitValue(80, "px")},
  {"name": "87","size":UnitValue(87, "px")},
  {"name": "120","size":UnitValue(120, "px")},
  {"name": "152","size":UnitValue(152, "px")},
  {"name": "180","size":UnitValue(180, "px")},
  {"name": "167","size":UnitValue(167, "px")},

  {"name": "ic_launcher_48","size":UnitValue(48, "px")},
  {"name": "ic_launcher_72","size":UnitValue(72, "px")},
  {"name": "ic_launcher_96","size":UnitValue(96, "px")},
  {"name": "ic_launcher_144","size":UnitValue(144, "px")},
  {"name": "ic_launcher_192","size":UnitValue(192, "px")},
  {"name": "ic_launcher_256","size":UnitValue(256, "px")},
  {"name": "ic_launcher_384","size":UnitValue(384, "px")},
  {"name": "ic_launcher_512","size":UnitValue(512, "px")}
];

//定义一个变量[option]，表示iOS输出的格式为PNG。并设置输出PNG时不执行PNG8压缩，以保证图标质量。
var option = new PNGSaveOptions();

//保存当前的历史状态，以方便缩放图片后，再返回至最初状态的尺寸。
option.PNG8 = false;
var startState = pngDoc.historyStates[0];

//添加一个循环语句，用来遍历所有图标对象的数组。
for (var i = 0; i < icons.length; i++) 
{
	//定义一个变量[icon]，表示当前遍历到的图标对象。
	var icon = icons[i];

	//调用[pngDoc]对象的[resizeImage]方法，将原图标，缩小到当前遍历到的图标对象定义的尺寸。
	pngDoc.resizeImage(icon.size, icon.size);

	//定义一个变量[destFileName]，表示要导出的图标的名称。
	var destFileName = icon.name + ".png";

	if (icon.name == "iTunesArtwork")
        destFileName = icon.name;
    
	//定义一个变量[file]，表示图标输出的路径。
	var file = new File(destFolder + "/" + destFileName);

	//调用[pngDoc]的[saveAs]方法，将缩小尺寸后的图标导出到指定路径。
	pngDoc.saveAs(file, option, true, Extension.LOWERCASE);

	//将[doc]对象的历史状态，恢复到尺寸缩放之前的状态，即恢复到1024*1024尺寸，为下次缩小尺寸做准备。
	pngDoc.activeHistoryState = startState;
}

//操作完成后，关闭文档。
pngDoc.close(SaveOptions.DONOTSAVECHANGES);