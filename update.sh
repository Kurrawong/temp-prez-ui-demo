#then run
#npm run build && \
git add dist -f && \
git commit -m "Adding dist" && \
git push origin main && \
git -c credential.helper= -c core.quotepath=false -c log.showSignature=false push --progress --porcelain main :gh-pages && \
git subtree push --prefix dist main gh-pages