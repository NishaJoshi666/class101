import dropbox

class transfer:
    def __init__(self,accessToken):
        self.accessToken = accessToken

    def uploadFiles(self,file_from,file_to):
        dbx = dropbox.Dropbox(self.accessToken)
        f = open(file_from,'rb')
        dbx.files_upload(f.read(),file_to)

def main():
    accessToken = 'sl.AqbxgY2pWOMiREd-kBAyDUy3GQLJj8wrtBx2Xj1Vq3lX2A5qllGirMqPldwHlQPZtvF49k54gehg_yN3a8mHmAoRH1tW1lni-2n8ZCfVIE0g1cTfO0GOlb6K9Nc1nxneKAaUGPc'
    tranferData = transfer(accessToken)
    file_from = input('Enter The File Path To Trasfer : ')
    file_to = input('Enter The Full Path To Upload To DropBox ')
    tranferData.uploadFiles(file_from,file_to)
    print('File Has Been Moved')

main()
